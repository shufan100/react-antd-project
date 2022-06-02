import React, { Component } from 'react'
import { Layout, Affix, message } from 'antd'
import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import Tags from './Tags'

import { BackTop } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

const style = {
  height: 30,
  width: 30,
  lineHeight: '40px',
  borderRadius: 4,
  backgroundColor: '#1088e9',
  color: '#fff',
  textAlign: 'center',
  fontSize: 20
}
class Home extends Component {
  state = {
    top: 0.001 //0不固定；大于0固定
  }
  backTopClick = () => {
    setTimeout(() => {
      message.success('回到顶部了')
    }, 800)
  }

  render() {
    return (
      <Layout style={{ height: '100%' }}>
        <Sider />
        <Layout id='layoutRight' style={{ overflowY: 'scroll' }}>
          <Affix offsetTop={this.state.top}>
            <Header />
          </Affix>
          <Tags />
          <Content />
          {/* 回到顶部 */}
          <BackTop visibilityHeight={30} duration={1000} target={() => document.getElementById('layoutRight')} onClick={() => this.backTopClick()}>
            <RocketOutlined style={style} />
          </BackTop>
        </Layout>
      </Layout>
    )
  }
}

export default Home
