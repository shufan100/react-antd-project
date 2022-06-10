import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import enUS from 'antd/lib/locale/en_US';
import store from './store'
import RouterView from './mainRouter'

class App extends Component {
  render() {
    return (
      // ConfigProvider:全局化配置
      // ----locale：中英文
      // ----componentSize：全局UI尺寸small | middle | large
      // ----getPopupContainer：设置弹出框（Select, Tooltip, Menu 等等）渲染父节点，默认渲染到 body 上；现在是挂在root上
      // ----space：设置 Space 的 size
      <ConfigProvider locale={zhCN} componentSize='middle' getPopupContainer={()=>document.getElementById('root')} >
        {/* 通过Provider将store传给所有被Provider包裹的子组件，所有的子组件都可以通过props获取属性值，与更新方法 */}
        <Provider store={store}>
          <RouterView />
        </Provider>
      </ConfigProvider>
    )
  }
}

export default App
