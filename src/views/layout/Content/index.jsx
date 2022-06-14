import React, { Suspense } from 'react'
import { Route, Redirect, Switch, withRouter } from 'react-router-dom'
import { Layout } from 'antd'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './index.less'
import routeData from '@/router'
import Loading from '@/components/loading'
const { Content } = Layout

// 这里注册二级路由（react-router-dom)5.0版本为例：
const LayoutContent = ({ location }) => (
  <Content className='Content'>
    {/* <TransitionGroup>
      <CSSTransition key={location.pathname} timeout={500} classNames='fade' exit={false}> */}
    <Suspense fallback={<Loading />}>
      {/* Switch的location：用于缓存路由 */}
      <Switch location={location}>
        <Redirect exact from='/' to='/home' />
        {routeData.map(item => (
          <Route key={item.path} path={item.path} component={item.component} />
        ))}
        <Redirect to='/error/404' />
      </Switch>
    </Suspense>
    {/* </CSSTransition>
    </TransitionGroup> */}
  </Content>
)
export default withRouter(LayoutContent)
