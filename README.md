提示：本项目为个人项目，仅供学习交流使用，请勿用于商业用途。

# 项目简介

- node>=16.20.2
- pnpm>=7.1.2
- react
- antd
- typescript
- react-router-dom
- redux
- react-redux
- axios
- less
- echarts

### 目录结构

```bash
# ├─ public                     # 静态资源
# │   ├─ favicon.ico            # favicon图标
# │   ├─ index.html             # 主页面
# │   ├─ logo192.png            # logo 图
# │   ├─ logo512.png            # logo 图
# │   ├─ manifest.json          # 应用加壳的配置文件
# │   └─ robots.txt             # 爬虫协议文件
# │
# ├─ src                        # 源代码文件夹
# │   ├─ api                    # 所有请求
# │   ├─ assets                 # 图片 字体等静态资源
# │   ├─ components             # 全局公用组件 / 也叫一般组件，组件以标签形式直接渲染<about/>
# │   │   └─ demo               # React写法整理
# │   ├─ config                 # 全局配置
# │   │   ├─ menuConfig.js      # 导航菜单配置
# │   │   └─ routeMap.js        # 路由配置
# │   ├─ router                 # 路由
# │   ├─ store                  # 全局 store管理
# │   ├─ styles                 # 全局样式
# │   ├─ utils                  # 全局公用方法
# │   ├─ views                  # views 所有页面
# │   │   ├─ layout             # 路由加载主页面
# │   │   ├─ login              # 登录组件文件夹
# │   │   ├─ page               # 路由组件文件夹 / 路由组件，组件以路由方式加载
# │   ├─ App.vue                # 入口页面
# │   ├─ reportWebVitals.js     # 页面性能分析文件(需要web-vitals库的支持)
# │   ├─ setupTests.js          # 组件单元测试的文件(需要jest-dom库的支持)
# │   ├─ setupProxy.js          # react脚手架配置代理
# │   └─main.js                 # 入口文件
# ├── .env.development          # 开发环境变量配置
# ├── .env.production           # 生产环境变量配置
# ├── .eslintrc.js              # esLint配置文件
# ├── config-overrides.js       # 对cra的webpack自定义配置
# └── package.json              # package.json
```
