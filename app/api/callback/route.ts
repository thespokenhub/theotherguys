import type { NextRequest } from 'next/server';
import { OAUTH_STATE_COOKIE, callbackUrl, handshakePage } from '../oauth';

/**
 * Step two of the GitHub OAuth handshake. GitHub sends the reader back here
 * with a code; we trade it for a token using the client secret, then hand the
 * token to the CMS window that opened this popup. The token is never stored:
 * it lives in the browser that asked for it.
 */
export const dynamic = 'force-dynamic';

type TokenResponse = {
  access_token?: string;
  error?: string;
  error_description?: string;
};

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  const clientSecret = process.env.GITHUB_CLIENT_SECRET;
  if (!clientId || !clientSecret) {
    return handshakePage({
      ok: false,
      error: 'GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET are not set on this deployment.',
      errorCode: 'missing_config',
    });
  }

  const params = request.nextUrl.searchParams;

  /* "Cancel" on GitHub's consent screen comes back here, not as a failure. */
  const denied = params.get('error');
  if (denied) {
    return handshakePage({
      ok: false,
      error: params.get('error_description') ?? denied,
      errorCode: denied,
    });
  }

  const code = params.get('code');
  if (!code) {
    return handshakePage({ ok: false, error: 'GitHub sent no code.', errorCode: 'no_code' });
  }

  /* Both halves of the CSRF check: the state GitHub echoed and the state
     app/api/auth put in an httpOnly cookie have to be the same. */
  const expected = request.cookies.get(OAUTH_STATE_COOKIE)?.value;
  if (!expected || params.get('state') !== expected) {
    return handshakePage({
      ok: false,
      error: 'The sign-in state did not match. Start again from /admin.',
      errorCode: 'bad_state',
    });
  }

  let token: TokenResponse;
  try {
    const exchange = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: { accept: 'application/json', 'content-type': 'application/json' },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
        redirect_uri: callbackUrl(request),
      }),
      cache: 'no-store',
    });
    token = (await exchange.json()) as TokenResponse;
  } catch {
    return handshakePage({
      ok: false,
      error: 'Could not reach GitHub to exchange the code.',
      errorCode: 'exchange_failed',
    });
  }

  if (!token.access_token) {
    return handshakePage({
      ok: false,
      error: token.error_description ?? token.error ?? 'GitHub returned no access token.',
      errorCode: token.error ?? 'no_token',
    });
  }

  const response = handshakePage({ ok: true, token: token.access_token });
  /* The state has done its job; don't leave it lying around. */
  response.headers.append(
    'set-cookie',
    `${OAUTH_STATE_COOKIE}=; Path=/api; Max-Age=0; HttpOnly; SameSite=Lax`,
  );
  return response;
}
