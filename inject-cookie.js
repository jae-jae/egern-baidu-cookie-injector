export default async function(ctx) {
  console.log('[Baidu Cookie Injector] 脚本开始执行');
  console.log('[Baidu Cookie Injector] 请求 URL:', ctx.request.url);

  const cookieName = ctx.env.COOKIE_NAME || 'abc';
  const cookieValue = ctx.env.COOKIE_VALUE || '123';

  console.log('[Baidu Cookie Injector] 配置 - Cookie名称:', cookieName);
  console.log('[Baidu Cookie Injector] 配置 - Cookie值:', cookieValue);

  const existing = ctx.request.headers.get('Cookie') || '';
  console.log('[Baidu Cookie Injector] 现有 Cookie:', existing);

  if (existing.includes(cookieName + '=')) {
    console.log('[Baidu Cookie Injector] Cookie 已存在，跳过注入');
    return;
  }

  const newCookie = existing
    ? existing + '; ' + cookieName + '=' + cookieValue
    : cookieName + '=' + cookieValue;

  ctx.request.headers.set('Cookie', newCookie);
  console.log('[Baidu Cookie Injector] 注入成功:', cookieName + '=' + cookieValue);
}
