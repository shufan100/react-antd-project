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
      tooltip: {
        trigger: 'item'
      },

      series: [
        {
          name: '访问来源',
          type: 'pie',
          radius: '80%',
          center: ['50%', '50%'],
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          data: [
            { value: 500, name: '电子产品' },
            { value: 310, name: '服装' },
            { value: 274, name: '化妆品' },
            { value: 400, name: '家居' }
          ].sort(function (a, b) {
            return a.value - b.value
          }),
          roseType: 'radius',
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 400
          }
        }
      ]
    })
  }

  render() {
    return <div ref={currentNode => (this.el = currentNode)} style={{ width: '100%', height: '300px' }}></div>
  }
}
