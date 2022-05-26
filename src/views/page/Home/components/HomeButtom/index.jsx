import React from 'react'
import { Card } from 'antd'
import './index.less'

import RaddarChart from '@/components/Echarts/RaddarChart'
import BreadChart from '@/components/Echarts/BreadChart'
import Bread2Chart from '@/components/Echarts/Bread2Chart'

export default function HomeButtom(props) {
  const { loading } = props
  return (
    <div id='HomeButtom'>
      <Card title='转化率' loading={loading}>
        <RaddarChart />
      </Card>
      <Card title='访问来源' loading={loading}>
        <BreadChart />
      </Card>
      <Card title='成交占比' loading={loading}>
        <Bread2Chart />
      </Card>
    </div>
  )
}
