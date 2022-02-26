import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
// import Tags from './Tags';
import Content from './Content';
class Home extends Component {
  state = {}
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout>
          <Header />
          {/* <Tags /> */}
          <Content />
          {/* <Redirect exact from="/" to="/brouter" /> */}
        </Layout>
      </Layout>
    );
  }

}

export default Home;
