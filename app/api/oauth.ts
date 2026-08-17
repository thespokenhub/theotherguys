import type { NextRequest } from 'next/server';

/**
 * The two halves of the GitHub OAuth handshake that /admin runs on. Sveltia
 * CMS speaks the Netlify CMS popup protocol, which is three messages long:
 *
 *   popup  → opener   "authorizing:github"
 *   opener → popup    "authorizing:github"          (the opener says it's ready)
 *   popup  → opener   "authorization:github:success:{…json…}"
 *
 * Doing it here rather than through a hosted OAuth proxy means the client
 * secret stays in this deployment's env and nobody else ever holds the token.
 */

export const OAUTH_STATE_COOKIE = 'tog_oauth_state';

const PROVIDER = 'github';

/** 32 hex characters of CSRF state. */
export function randomState() {
  const bytes = crypto.getRandomValues(new Uint8Array(16));
  return Array.from(bytes, (byte) => byte.toString(16).padStart(2, '0')).join('');
}

/**
 * The origin this deployment is actually being served on. Behind Vercel's
 * proxy the request URL is the internal one, so the forwarded headers are the
 * truth; both are checked so `next dev` works too.
 */
function origin(request: NextRequest) {
  const forwardedHost = request.headers.get('x-forwarded-host') ?? request.headers.get('host');
  const host = forwardedHost?.split(',')[0]?.trim();
  if (!host) return request.nextUrl.origin;
  const proto = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim();
  return `${proto || (host.startsWith('localhost') ? 'http' : 'https')}://${host}`;
}

/** Must match the callback URL registered on the GitHub OAuth App. */
export const callbackUrl = (request: NextRequest) => `${origin(request)}/api/callback`;

/** Safe to drop inside a <script>: no closing tag, no line separators. */
const embed = (value: unknown) =>
  JSON.stringify(value)
    .replace(/</g, '\\u003c')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029');

type Outcome =
  | { ok: true; token: string }
  | { ok: false; error: string; errorCode?: string };

/**
 * The page the popup lands on. It waits for the CMS window to say it's
 * listening, hands over the result, and closes itself.
 */
export function handshakePage(outcome: Outcome) {
  const status = outcome.ok ? 'success' : 'error';
  const payload = outcome.ok
    ? { provider: PROVIDER, token: outcome.token }
    : { provider: PROVIDER, error: outcome.error, errorCode: outcome.errorCode };

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>Signing you in…</title>
<style>
  body { margin: 0; display: grid; place-items: center; min-height: 100vh;
         background: #f5eee5; color: #2b2440;
         font: 16px/1.5 'Instrument Sans', system-ui, sans-serif; }
  p { margin: 0; padding: 24px; text-align: center; }
</style>
</head>
<body>
<p>${outcome.ok ? 'Signed in. You can close this window.' : 'Sign-in failed. You can close this window.'}</p>
<script>
(function () {
  var message = 'authorization:${PROVIDER}:${status}:' + ${embed(embed(payload))};
  function reply(event) {
    if (event.data !== 'authorizing:${PROVIDER}') return;
    window.removeEventListener('message', reply, false);
    window.opener.postMessage(message, event.origin);
    setTimeout(function () { window.close(); }, 800);
  }
  if (!window.opener) {
    document.querySelector('p').textContent =
      'Open /admin and sign in from there — this page only works in the pop-up.';
    return;
  }
  window.addEventListener('message', reply, false);
  /* The opener only echoes back to a window it opened, so it's safe to
     announce ourselves before we know its origin. */
  window.opener.postMessage('authorizing:${PROVIDER}', '*');
})();
</script>
</body>
</html>
`;

  return new Response(html, {
    status: outcome.ok ? 200 : 400,
    headers: {
      'content-type': 'text/html; charset=utf-8',
      'cache-control': 'no-store',
      /* The page holds a token: never let it be framed or indexed. */
      'x-frame-options': 'DENY',
      'x-robots-tag': 'noindex, nofollow',
    },
  });
}
