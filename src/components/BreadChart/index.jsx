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
      legend: {
        bottom: '1%',
        left: 'center'
      },
      series: [
        {
          color: ['#5ab1ef', '#b6a2de', '#67e0e3', '#2ec7c9'],
          name: '访问来源',
          type: 'pie',
          radius: ['40%', '70%'],
          avoidLabelOverlap: false,
          itemStyle: {
            borderRadius: 10,
            borderColor: '#fff',
            borderWidth: 2
          },
          label: {
            show: false,
            position: 'center'
          },
          emphasis: {
            label: {
              show: true,
              fontSize: '12',
              fontWeight: 'bold'
            }
          },
          labelLine: {
            show: false
          },
          data: [
            { value: 1048, name: '搜索引擎' },
            { value: 735, name: '直接访问' },
            { value: 580, name: '邮件营销' },
            { value: 484, name: '联盟广告' }
          ],
          animationType: 'scale',
          animationEasing: 'exponentialInOut',
          animationDelay: function () {
            return Math.random() * 100
          }
        }
      ]
    })
  }

  render() {
    return <div ref={currentNode => (this.el = currentNode)} style={{ width: '100%', height: '300px' }}></div>
  }
}
