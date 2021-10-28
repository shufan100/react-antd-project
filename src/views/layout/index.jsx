import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout>
          <Header />
          <Content />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
