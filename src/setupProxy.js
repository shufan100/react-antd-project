// 配置代理:
// 1、这里不是用的js语法，用的是node的语法，comjs
// 2、原理：react脚手架会找到这个文件，把这个文件加到webpack配置里面，webpack里面都是node的写法，要写comjs的语法

const proxy = require('http-proxy-middleware');  //这个库在初始化脚手架就下载好了

module.exports = function (app) {
  app.use(  // 使用这个方法
    proxy('/api1', {  // 遇见/api1前缀的会触发该代理
      target: 'http://localhost:5000', // 请求转发给谁
      changeOrigin: true, // 控制服务器收到的请求头中Host字段的值 // 服务器接收
      pathRewrite: { '^/api1': '' } // 重写请求路径，（加了/api1路径不对，要置空改回去）
    }),
    proxy('/api2', {
      target: 'http://localhost:5001',
      changeOrigin: true,
      pathRewrite: { '^/api2': '' }
    })
  );
};
