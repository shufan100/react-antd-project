import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
// import Tags from './Tags';
class Home extends Component {
  state = {};
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout>
          <Header />
          {/* <Tags /> */}
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default Home;

