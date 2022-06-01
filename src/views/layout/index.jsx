import React, { Component } from 'react'
import { Layout, Affix } from 'antd'
import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import Tags from './Tags'
class Home extends Component {
  state = {
    top: 0.001 //0不固定；大于0固定
  }
  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider />
        <Layout style={{ overflowY: 'scroll' }}>
          <Affix offsetTop={this.state.top}>
            <Header />
          </Affix>
          <Tags />
          <Content />
        </Layout>
      </Layout>
    )
  }
}

export default Home
