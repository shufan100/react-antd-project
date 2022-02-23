# 目录结构

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
# │   ├─ components             # 全局公用组件
# │   ├─ config                 # 全局配置
# │   │   ├─ menuConfig.js      # 导航菜单配置
# │   │   └─ routeMap.js        # 路由配置
# │   ├─ lib                    # 第三方库按需加载
# │   ├─ mock                   # 项目mock 模拟数据
# │   ├─ store                  # 全局 store管理
# │   ├─ styles                 # 全局样式
# │   ├─ utils                  # 全局公用方法
# │   ├─ views                  # views 所有页面
# │   ├─ App.js                 # 入口页面
# │   ├─ defaultSettings.js     # 全局默认配置
# │   ├─ reportWebVitals.js     # 页面性能分析文件(需要web-vitals库的支持)
# │   ├─ setupTests.js          # 组件单元测试的文件(需要jest-dom库的支持)
# │   └─index.js                # 入口文件
# ├── .env.development          # 开发环境变量配置
# ├── .env.production           # 生产环境变量配置
# ├── .eslintrc.js              # esLint配置文件
# ├── config-overrides.js       # 对cra的webpack自定义配置
# ├── deploy.sh                 # CI部署脚本
# ├── .travis.yml               # 自动化CI配置
# └── package.json              # package.json
```
