import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
// import Tags from './Tags';
import Content from './Content';
import Shopping from '../page/shopping';
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
            {/* 匹配到路由就不往下匹配了，减少路由效率问题 */}
            <Route path="/home" component={Content} /> {/* 注册路由 */}
            <Route exact path="/shopping" component={Shopping} />{' '}
            {/* 注册路由 */}
            <Redirect to="/home" />
            {/* 默认是展示的，所以需要重定向 */}
          </Switch>
        </Layout>
      </Layout>
    );
  }
}

export default Home;
