import React, { Component } from 'react';
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
        </Layout>
      </Layout>
    );
  }

}

export default Home;
