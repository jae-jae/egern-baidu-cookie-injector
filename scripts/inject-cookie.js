/**
 * Baidu Cookie Injector Script
 * 在请求百度域名时自动注入用户配置的 Cookie
 * 
 * 环境变量：
 * - COOKIE_NAME: Cookie 名称（默认: abc）
 * - COOKIE_VALUE: Cookie 值（默认: 123）
 */

// 从环境变量读取配置（使用默认值作为后备）
const COOKIE_NAME = ctx.env.COOKIE_NAME || 'abc';
const COOKIE_VALUE = ctx.env.COOKIE_VALUE || '123';

function main() {
  // 获取现有 Cookie
  let existingCookies = $request.headers['Cookie'] || '';
  
  // 检查是否已存在该 Cookie
  if (existingCookies.includes(COOKIE_NAME + '=')) {
    console.log('[Baidu Cookie Injector] Cookie "' + COOKIE_NAME + '" already exists, skipping injection');
    return {};
  }
  
  // 注入新 Cookie
  let newCookies = existingCookies 
    ? existingCookies + '; ' + COOKIE_NAME + '=' + COOKIE_VALUE
    : COOKIE_NAME + '=' + COOKIE_VALUE;
  
  $request.headers['Cookie'] = newCookies;
  console.log('[Baidu Cookie Injector] Injected cookie: ' + COOKIE_NAME + '=' + COOKIE_VALUE);
  
  return {
    headers: $request.headers
  };
}

main();
