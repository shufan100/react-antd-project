import React, { Component } from 'react'
import echart from '@/utils/echart.js'

export default class RaddarChart extends Component {
  state = {
    chart: null
  }
  componentDidMount() {
    this.initEchart()
  }
  componentWillUnmount() {
    this.state.chart && this.setState({ chart: null })
  }
  initEchart() {
    // let myChart = echart.init(this.el, 'macarons') // 初始化（图表初始化，挂载到node节点上）
    let myChart = echart.init(this.el) // 初始化（图表初始化，挂载到node节点上）
    this.setState({ chart: myChart }, () => {
      this.setOptions() // 初始化图表配置
    })
  }
  setOptions() {
    this.state.chart.setOption({
      legend: {
        bottom: 0,
        data: ['访问', '购买']
      },
      tooltip: {},
      radar: {
        radius: '60%',
        splitNumber: 8,
        indicator: [
          {
            name: '电脑'
          },
          {
            name: '充电器'
          },
          {
            name: '耳机'
          },
          {
            name: '手机'
          },
          {
            name: 'Ipad'
          },
          {
            name: '耳机'
          }
        ]
      },
      series: [
        {
          type: 'radar',
          symbolSize: 0,
          areaStyle: {
            shadowBlur: 0,
            shadowColor: 'rgba(0,0,0,.2)',
            shadowOffsetX: 0,
            shadowOffsetY: 10,
            opacity: 1
          },
          data: [
            {
              value: [90, 50, 86, 40, 50, 20],
              name: '访问',
              itemStyle: {
                color: '#b6a2de'
              }
            },
            {
              value: [70, 75, 70, 76, 20, 85],
              name: '购买',
              itemStyle: {
                color: '#5ab1ef'
              }
            }
          ]
        }
      ]
    })
  }
  render() {
    return <div ref={currentNode => (this.el = currentNode)} style={{ width: '100%', height: '300px' }}></div>
  }
}
