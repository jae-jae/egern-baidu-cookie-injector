export default async function(ctx) {
  console.log('[Baidu Cookie Injector] 脚本开始执行');
  console.log('[Baidu Cookie Injector] 请求 URL:', ctx.request.url);
  console.log('[Baidu Cookie Injector] 环境变量:', JSON.stringify(ctx.env));
  console.log('[Baidu Cookie Injector] COOKIE_NAME:', ctx.env.COOKIE_NAME);
  console.log('[Baidu Cookie Injector] COOKIE_VALUE:', ctx.env.COOKIE_VALUE);

  const cookieName = ctx.env.COOKIE_NAME;
  const cookieValue = ctx.env.COOKIE_VALUE;

  if (!cookieName || !cookieValue) {
    console.log('[Baidu Cookie Injector] 错误: 未配置 Cookie 名称或值');
    return;
  }

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
