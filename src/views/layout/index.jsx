/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-06-25 16:32:39
 * @FilePath: \react-antd-project\src\views\layout\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { Layout, Affix, message } from 'antd'
import Header from './Header'
import Sider from './Sider'
import Content from './Content'
import Tags from './Tags'

import { BackTop } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

const backTopIcon = {
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
    top: 1 //0不固定；大于0固定
  }
  // 回到顶部--回调
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
          {/* Affix:是否固定header+Tags Affix里没有包裹dom会报警告*/}
          <Affix offsetTop={this.state.top}>
            <Header />
          </Affix>
          <Tags />
          <Content />
          {/* 回到顶部 */}
          <BackTop visibilityHeight={30} duration={1000} target={() => document.getElementById('layoutRight')} onClick={() => this.backTopClick()}>
            <RocketOutlined style={backTopIcon} />
          </BackTop>
        </Layout>
      </Layout>
    )
  }
}
export default Home
