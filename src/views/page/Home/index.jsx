import React, { useState } from 'react'
import { BackTop, message } from 'antd'
import { RocketOutlined } from '@ant-design/icons'

import './index.less'

import HomeHead from './components/HomeHead'
import HomeContent from './components/HomeContent'
import HomeButtom from './components/HomeButtom'
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

export default function Home() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1500)
  const backTopClick = () => {
    message.success('回到顶部了')
  }

  return (
    <div id='home'>
      <HomeHead loading={loading} />
      <HomeContent loading={loading} />
      <HomeButtom loading={loading} />
      <BackTop visibilityHeight={30} duration={1000} target={() => document.getElementById('home')} onClick={() => backTopClick()}>
        <RocketOutlined style={style} />
      </BackTop>
    </div>
  )
}
