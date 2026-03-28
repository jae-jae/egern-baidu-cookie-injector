# Egern Baidu Cookie Injector

一个简单的 Egern 模块示例，演示如何在请求百度域名时自动注入自定义 Cookie。

## 功能

- 在所有百度相关域名请求中自动注入用户配置的 Cookie
- 支持用户自定义 Cookie 名称和值（通过环境变量配置）
- 支持以下域名：
  - `*.baidu.com`
  - `*.baidu.com.cn`
  - `*.baidustatic.com`
  - `*.bdstatic.com`
  - `*.bdimg.com`

## 安装

在 Egern 中添加模块订阅：

```
https://raw.githubusercontent.com/jae-jae/egern-baidu-cookie-injector/main/baidu-cookie-injector.yaml
```

## 配置

安装后，在 Egern 模块设置中配置以下环境变量：

| 变量名 | 说明 | 默认值 |
|--------|------|--------|
| `COOKIE_NAME` | 要注入的 Cookie 名称 | `abc` |
| `COOKIE_VALUE` | 要注入的 Cookie 值 | `123` |

## 项目结构

```
egern-baidu-cookie-injector/
├── baidu-cookie-injector.yaml    # 模块配置文件
├── scripts/
│   └── inject-cookie.js          # 注入脚本（远程引用）
├── README.md                      # 使用说明
└── LICENSE                        # MIT 许可证
```

## 模块结构说明

```yaml
name: Baidu Cookie Injector          # 模块名称
description: 模块描述                  # 功能说明
author: Violte                        # 作者
icon: https://...                     # 图标 URL
homepage: https://...                 # 主页地址

# 用户可配置的环境变量
env_schema:
  - name: COOKIE_NAME                 # 变量名
    label: Cookie 名称                 # UI 显示标签
    type: text                        # 输入类型
    default: abc                      # 默认值
    description: 要注入的 Cookie 名称  # 说明文字

# 匹配规则
rules:
  - DOMAIN-SUFFIX,baidu.com

# MITM 解密域名（HTTPS 需要）
mitm:
  - "*.baidu.com"

# 脚本配置（远程引用）
scriptings:
  - type: http-request
    pattern: ^https?://...
    script_path: https://...          # 远程脚本 URL
```

## 工作原理

1. **规则匹配**: `rules` 定义哪些请求需要处理
2. **MITM 解密**: 对于 HTTPS 请求，需要在 `mitm` 中配置域名以启用中间人解密
3. **环境变量**: 用户通过 `env_schema` 配置的变量可通过 `ctx.env.VAR_NAME` 访问
4. **脚本注入**: `http-request` 类型脚本在请求发送前执行，可以修改请求头

## 脚本 API

```javascript
// 访问环境变量
const value = ctx.env.VAR_NAME;

// 请求对象
$request.headers     // 请求头对象
$request.url         // 请求 URL

// 返回修改后的请求头
return {
  headers: $request.headers
};
```

## 相关链接

- [Egern 官方文档](https://doc.egernapp.com/)
- [模块配置指南](https://doc.egernapp.com/zh-CN/docs/configuration/modules)

## License

MIT License
