import React, { Component } from 'react'
import { Collapse, Space } from 'antd'
import { SettingOutlined, GithubFilled, QqOutlined, WechatOutlined, AlipayCircleOutlined, TaobaoCircleOutlined, WeiboCircleOutlined } from '@ant-design/icons'
import { PieChartOutlined, DotChartOutlined, AppstoreAddOutlined, LoadingOutlined, UserOutlined, WifiOutlined } from '@ant-design/icons'
import { AppstoreTwoTone, DashboardTwoTone, SmileTwoTone, FrownTwoTone, CarTwoTone, AlertTwoTone } from '@ant-design/icons'
import './index.less'
const { Panel } = Collapse

export default class Icons extends Component {
  state = {
    size: 180,
    expandIconPosition: 'end'
  }
  render() {
    return (
      <div id='Icons'>
        <h2 style={{ fontWeight: 'bold' }}>Icon组件示例</h2>
        <Collapse defaultActiveKey={['1']} ghost expandIconPosition={this.state.expandIconPosition}>
          <Panel header='实底风格' key='1' extra={<SettingOutlined />}>
            <p>
              <GithubFilled />
              <QqOutlined />
              <WechatOutlined />
              <AlipayCircleOutlined />
              <TaobaoCircleOutlined />
              <WeiboCircleOutlined />
            </p>
          </Panel>
        </Collapse>

        <Collapse defaultActiveKey={['1']} ghost expandIconPosition={this.state.expandIconPosition}>
          <Panel header='线框风格' key='1' extra={<SettingOutlined />}>
            <p>
              <PieChartOutlined />
              <DotChartOutlined />
              <AppstoreAddOutlined />
              <LoadingOutlined />
              <UserOutlined />
              <WifiOutlined />
            </p>
          </Panel>
        </Collapse>

        <Collapse defaultActiveKey={['1']} ghost expandIconPosition={this.state.expandIconPosition}>
          <Panel header='双色风格' key='1' extra={<SettingOutlined />}>
            <p>
              <AppstoreTwoTone />
              <DashboardTwoTone />
              <SmileTwoTone />
              <FrownTwoTone />
              <CarTwoTone />
              <AlertTwoTone />
            </p>
          </Panel>
        </Collapse>
      </div>
    )
  }
}
