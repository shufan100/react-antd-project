import React, { Component } from 'react';
import { Layout } from 'antd';
import Header from './Header';
import Sider from './Sider';
// import Tags from './Tags';
import Content from './Content';
class Home extends Component {
  state = {
    sex: '女',
    address: '中国北京。。。'
  };
  speak = (param) => {
    console.log('你点击了我！', param);
  }
  render () {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider />
        <Layout>
          <Header />
          {/* <Tags /> */}
          {/* 批量props传值：展开运算符的写法是一个个写的语法糖 */}
          <Content age={18} name='tom' {...this.state} speak={this.speak} />
        </Layout>
      </Layout>
    );
  }

}

export default Home;
