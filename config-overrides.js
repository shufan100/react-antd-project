const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
} = require('customize-cra');
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}
// process.env.CI = 'false';
// const addCustomize = () => (config) => {
//   if (config.output.publicPath) {
//     config.output.publicPath =
//       process.env.NODE_ENV === 'production'
//         ? '/react-antd-peoject/'
//         : '/';
//   }
//   if (config.resolve) {
//     config.resolve.extensions.push('.jsx');
//   }
//   return config;
// };
// //  在这里使用 customize-cra 里的一些函数来修改配置
module.exports = override(
  // 针对antd实现按需打包: 根据import来打包(使用babel-plugin-import)
  // fixBabelImports('import', {
  //   libraryName: 'antd',
  //   libraryDirectory: 'es',
  //   style: true, // 自动打包相关的样式,true代表运用less
  // }),

  // 使用less-loader对源码中的less的变量进行重新指定
  // addLessLoader({
  //   javascriptEnabled: true,
  //   modifyVars: { '@primary-color': '#1DA57A' },
  // }),

  // 配置路径别名
  addWebpackAlias({
    '@': resolve('src'),
  }),
//   addCustomize()
// addLessLoader()
);
