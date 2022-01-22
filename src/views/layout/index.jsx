import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
// import Tags from './Tags';
import Content from './Content';
class Home extends Component {
  state = {
    name:'tom',
    age:18,
    sex:'女',
    layoutName:'111'
  };
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout>
          <Header />
          {/* <Tags /> */}
          {/* 批量props传值 */}
          {/* 展开运算符的写法是一个个写的语法糖 */}
          <Content layoutName={this.state.layoutName} name='tom' {...this.state} />
        </Layout>
      </Layout>
    );
  }
}

export default Home;
