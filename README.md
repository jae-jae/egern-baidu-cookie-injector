# Egern Baidu Cookie Injector

一个简单的 Egern 模块示例，演示如何在请求百度域名时自动注入自定义 Cookie。

## 功能

- 在所有百度相关域名请求中自动注入 `abc=123` Cookie
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

或者直接导入模块文件。

## 模块结构

```yaml
name: Baidu Cookie Injector          # 模块名称
description: 模块描述                  # 功能说明
author: Violte                        # 作者
icon: https://...                     # 图标 URL
homepage: https://...                 # 主页地址

rules:                                # 匹配规则
  - DOMAIN-SUFFIX,baidu.com

mitm:                                 # MITM 解密域名（HTTPS 需要）
  - "*.baidu.com"

scriptings:                           # 脚本配置
  - type: http-request                # 脚本类型
    pattern: ^https?://...            # URL 匹配正则
    script: |                         # 脚本内容
      // JavaScript 代码
```

## 工作原理

1. **规则匹配**: `rules` 定义哪些请求需要处理
2. **MITM 解密**: 对于 HTTPS 请求，需要在 `mitm` 中配置域名以启用中间人解密
3. **脚本注入**: `http-request` 类型脚本在请求发送前执行，可以修改请求头

## 自定义修改

如果要修改注入的 Cookie，编辑脚本中的以下变量：

```javascript
const COOKIE_NAME = 'abc';    // Cookie 名称
const COOKIE_VALUE = '123';   // Cookie 值
```

## 相关链接

- [Egern 官方文档](https://doc.egernapp.com/)
- [模块配置指南](https://doc.egernapp.com/zh-CN/docs/configuration/modules)

## License

MIT License
