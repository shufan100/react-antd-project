import React, { useState } from 'react'
import { Card, Tabs } from 'antd'
import LineChart from '@/components/Echarts/LineChart'
import './index.less'
const { TabPane } = Tabs
export default function VisitAnalysis(props) {
  const [activeKey, setActiveKey] = useState('1')
  // 折线图
  const lisnXAxis = [...new Array(18)].map((_item, index) => `${index + 6}:00`)
  const lineSeriesData = [
    [111, 222, 4000, 18000, 33333, 55555, 66666, 33333, 14000, 36000, 66666, 44444, 22222, 11111, 4000, 2000, 500, 333, 222, 111],
    [33, 66, 88, 333, 3333, 5000, 18000, 3000, 1200, 13000, 22000, 11000, 2221, 1201, 390, 198, 60, 30, 22, 11]
  ]
  // 柱状图
  const barXAxis = [...new Array(12)].map((_item, index) => `${index + 1}月`)
  const barSeriesData = [[100, 333, 500, 320, 420, 320, 210, 300, 510, 600, 320, 480]]

  return (
    <Tabs id='VisitAnalysis' defaultActiveKey={activeKey} onChange={key => setActiveKey(key)} style={{ background: '#fff' }}>
      <TabPane tab='浏览趋势' key='1'>
        <Card loading={props.loading}>{activeKey === '1' ? <LineChart seriesData={lineSeriesData} xAxisData={lisnXAxis} /> : ''}</Card>
      </TabPane>
      <TabPane tab='访问量' key='2'>
        <Card loading={props.loading}>{activeKey === '2' ? <LineChart type='bar' seriesData={barSeriesData} xAxisData={barXAxis} /> : ''}</Card>
      </TabPane>
    </Tabs>
  )
}
