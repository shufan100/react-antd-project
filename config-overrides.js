const { override, addWebpackAlias, fixBabelImports, addLessLoader } = require('customize-cra');
const path = require('path');
function resolve (dir) {
  return path.join(__dirname, dir);
}

const addCustomize = () => (config) => {
  if (config.output.publicPath) {
    config.output.publicPath = process.env.NODE_ENV === 'production' ? '/' : '/';
  }
  if (config.resolve) {
    config.resolve.extensions.push('.jsx');
  }
  return config;
};
// //  在这里使用 customize-cra 里的一些函数来修改配置
module.exports = override(
  // -------配置antd的主题颜色-------
  fixBabelImports('import', { // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true // 自动打包相关的样式,true代表运用less
  }),
  addLessLoader({// 使用less-loader对源码中的less的变量进行重新指定
    lessOptions: {
      javascriptEnabled: true, //允许用js修改end地的底层less文件
      modifyVars: { '@primary-color': '#61dafb' } // 修改主题颜色
    }
  }),
  // ------end------
  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src')
  }),
  addCustomize()
);



