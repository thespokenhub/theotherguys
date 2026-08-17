import { NextResponse, type NextRequest } from 'next/server';
import { OAUTH_STATE_COOKIE, callbackUrl, randomState } from '../oauth';

/**
 * Step one of the GitHub OAuth handshake, so /admin needs no third-party
 * service. Sveltia CMS opens this in a popup as
 * `{base_url}/api/auth?provider=github&scope=repo&site_id=…`; we hand the
 * reader to GitHub, and app/api/callback finishes the job.
 */
export const dynamic = 'force-dynamic';

/**
 * Anything wider than these would let the CMS ask for more than it needs.
 * `repo` is the default because it's the only one that can write to a private
 * repo; while this one is public, setting GITHUB_OAUTH_SCOPE=public_repo
 * narrows the grant so signing in can't touch anyone's private work.
 */
const SCOPES = new Set(['repo', 'public_repo']);

export async function GET(request: NextRequest) {
  const clientId = process.env.GITHUB_CLIENT_ID;
  if (!clientId) {
    return NextResponse.json(
      { error: 'GITHUB_CLIENT_ID is not set on this deployment.' },
      { status: 500 },
    );
  }

  const provider = request.nextUrl.searchParams.get('provider') ?? 'github';
  if (provider !== 'github') {
    return NextResponse.json({ error: `Unsupported provider "${provider}".` }, { status: 400 });
  }

  const configured = process.env.GITHUB_OAUTH_SCOPE ?? '';
  const requested = request.nextUrl.searchParams.get('scope') ?? '';
  const scope =
    (SCOPES.has(configured) && configured) || (SCOPES.has(requested) && requested) || 'repo';

  /* The state is the CSRF guard: GitHub echoes it back, and the callback only
     trusts a code that arrives with the cookie this response set. */
  const state = randomState();

  const authorize = new URL('https://github.com/login/oauth/authorize');
  authorize.searchParams.set('client_id', clientId);
  authorize.searchParams.set('redirect_uri', callbackUrl(request));
  authorize.searchParams.set('scope', scope);
  authorize.searchParams.set('state', state);

  const response = NextResponse.redirect(authorize, { status: 302 });
  response.cookies.set(OAUTH_STATE_COOKIE, state, {
    httpOnly: true,
    sameSite: 'lax',
    secure: request.nextUrl.protocol === 'https:',
    path: '/api',
    maxAge: 600,
  });
  return response;
}
