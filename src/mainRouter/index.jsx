import React from 'react'
import { BrowserRouter, HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
// import { getUserInfo } from '@/store/actions';
import Login from '../views/login'
import Layout from '../views/layout'

// 一级菜单，控制登录和一级界面
class Router extends React.Component {
  render() {
    const { token } = this.props

    return (
      // 路由一定要用这个容器包裹HashRouter 或 BrowserRouter
      // HashRouter刷新浏览器，路由使用state传参的话，会丢失state路由数据
      <BrowserRouter hashType='slash'>
        <Switch>
          {/* exact精准匹配 */}
          <Route exact path='/login' component={Login} />
          <Route
            path='/'
            render={() => {
              if (!token) {
                return <Redirect to='/login' />
              } else {
                return <Layout />
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    )
  }
}

export default connect(state => state.user)(Router)
