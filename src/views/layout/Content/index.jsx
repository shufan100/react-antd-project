import React, { Suspense } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import './index.less'
import routeData from '@/router'
import Loading from '@/components/loading'
const { Content } = Layout

// 这里注册二级路由（react-router-dom)5.0版本为例：
const LayoutContent = props => (
  <Content className='Content' style={{ height: 'calc(100% - 100px)', overflow: 'hidden' }}>
    <Suspense fallback={<Loading />}>
      {/* Switch的location：用于缓存路由 */}
      <Switch location={props.location}>
        <Redirect exact from='/' to='/home' />
        {routeData.map(item => (
          <Route key={item.path} path={item.path} component={item.component} />
        ))}
        <Redirect to='/error/404' />
      </Switch>
    </Suspense>
  </Content>
)
export default withRouter(LayoutContent)
