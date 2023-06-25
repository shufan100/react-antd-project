/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-06-25 17:50:05
 * @FilePath: \react-antd-project\src\views\page\Home\components\HomeContent\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState } from 'react'
import { Card, Tabs } from 'antd'
import LineChart from '@/components/Echarts/LineChart'
import './index.less'
// const { TabPane } = Tabs
const data = [
  {
    key: '1',
    label: '浏览趋势',
    children: 'Content of Tab Pane 1'
  },
  {
    key: '2',
    label: '访问量',
    children: 'Content of Tab Pane 2'
  }
]

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
  // let lin1 = (
  //   <Card loading={props.loading}>
  //     {activeKey === '1' ? (
  //       <LineChart seriesData={lineSeriesData} xAxisData={lisnXAxis} />
  //     ) : (
  //       <LineChart type='bar' seriesData={barSeriesData} xAxisData={barXAxis} />
  //     )}
  //   </Card>
  // )

  return (
    // <Tabs id='VisitAnalysis' defaultActiveKey={activeKey} onChange={key => setActiveKey(key)} style={{ background: '#fff' }}>
    //   <TabPane tab='浏览趋势' key='1'>
    //     <Card loading={props.loading}>{activeKey === '1' ? <LineChart seriesData={lineSeriesData} xAxisData={lisnXAxis} /> : ''}</Card>
    //   </TabPane>
    //   <TabPane tab='访问量' key='2'>
    //     <Card loading={props.loading}>{activeKey === '2' ? <LineChart type='bar' seriesData={barSeriesData} xAxisData={barXAxis} /> : ''}</Card>
    //   </TabPane>
    // </Tabs>
    <Tabs
      id='VisitAnalysis'
      defaultActiveKey={activeKey} //默认选择
      destroyInactiveTabPane={true}
      style={{ background: '#fff' }}
      onChange={key => setActiveKey(key)}
      items={data.map(i => ({
        label: i.label,
        key: i.key,
        children: (
          <Card loading={props.loading}>
            {activeKey === '1' ? (
              <LineChart seriesData={lineSeriesData} xAxisData={lisnXAxis} />
            ) : (
              <LineChart type='bar' seriesData={barSeriesData} xAxisData={barXAxis} />
            )}
          </Card>
        )
      }))}
    />
  )
}
