import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/es/locale/zh_CN'
import store from './store'
import RouterView from './mainRouter'

class App extends Component {
  render() {
    return (
      // antd插件配置为中文，默认en
      <ConfigProvider locale={zhCN}>
        {/* 通过Provider将store传给所有被Provider包裹的子组件，所有的子组件都可以通过props获取属性值，与更新方法 */}
        <Provider store={store}>
          <RouterView />
        </Provider>
      </ConfigProvider>
    )
  }
}

export default App
