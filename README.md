# Egern Baidu Cookie Injector

最小化 Egern 模块 Demo：在请求百度域名时注入自定义 Cookie。

## 安装

在 Egern 中添加模块：

```
https://raw.githubusercontent.com/jae-jae/egern-baidu-cookie-injector/main/baidu-cookie-injector.yaml
```

## 配置

安装后在模块设置中配置：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `COOKIE_NAME` | Cookie 名称 | `abc` |
| `COOKIE_VALUE` | Cookie 值 | `123` |

## 文件结构

```
├── baidu-cookie-injector.yaml  # 模块配置
└── inject-cookie.js            # 注入脚本
```

## License

MIT
