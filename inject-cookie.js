export default async function(ctx) {
  const cookieName = ctx.env.COOKIE_NAME || 'abc';
  const cookieValue = ctx.env.COOKIE_VALUE || '123';

  const existing = ctx.request.headers.get('Cookie') || '';
  if (existing.includes(cookieName + '=')) {
    return;
  }

  const newCookie = existing
    ? existing + '; ' + cookieName + '=' + cookieValue
    : cookieName + '=' + cookieValue;

  ctx.request.headers.set('Cookie', newCookie);
}
