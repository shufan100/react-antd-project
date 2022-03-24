import React, { Component, lazy, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Loading from '@/views/loading';
// import Tags from './Tags';

// 这种组件会全部加载出来
// import Content from './Content';
// import Shopping from '../page/shopping';
// import About from '@/views/page/about';

// 路由懒加载(切换路由的时候才加载)
const Content = lazy(() => import('./Content'));
const Shopping = lazy(() => import('@/views/page/shopping'));
const About = lazy(() => import('@/views/page/about'));
class Home extends Component {
  state = {};
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout>
          <Header />
          {/* <Tags /> */}
          {/* <Content /> */}

          {/* 一级路由 */}
          <Switch>
            {/* lazy默认配合Suspense来使用 */}
            <Suspense fallback={<Loading />}>
              {/* 匹配到路由就不往下匹配了，减少路由效率问题 */}
              <Route path="/home" component={Content} /> {/* 注册路由 */}
              <Route exact path="/shopping" component={Shopping} />{/* 注册路由 */}
              <Route exact path="/about" component={About} />{/* 注册路由 */}
              <Redirect to="/home" />{/* 默认是展示的，所以需要重定向 */}
            </Suspense>
          </Switch>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
