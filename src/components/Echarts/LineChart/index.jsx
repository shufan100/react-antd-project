// 柱状图 、 折线图
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import echart from '@/utils/echart.js'
import { debounce } from '@/utils/util'

export default class LineChart extends Component {
  //
  static propTypes = {
    type: PropTypes.string,
    seriesData: PropTypes.array.isRequired,
    xAxisData: PropTypes.array.isRequired
  }
  static defaultProps = {
    type: 'line' // line线，bar柱
  }
  //
  state = {
    chart: null
  }
  // 组件已挂载
  componentDidMount() {
    debounce(this.initChart.bind(this), 300)()
    window.addEventListener('resize', () => this.resize())
  }
  // 卸载组件前
  componentWillUnmount() {
    if (!this.state.chart) {
      return
    }
    window.removeEventListener('resize', () => this.resize()) // 移除窗口，变化时重置图表
    this.setState({ chart: null })
  }

  resize() {
    const chart = this.state.chart
    if (chart) {
      debounce(chart.resize.bind(this), 300)()
    }
  }

  initChart() {
    // let myChart = echart.init(this.el, 'macarons') // 初始化（图表初始化，挂载到node节点上）
    let myChart = echart.init(this.el) // 初始化（图表初始化，挂载到node节点上）
    this.setState({ chart: myChart }, () => {
      this.setOptions() // 初始化图表配置
    })
  }
  setOptions() {
    const { type, xAxisData, seriesData } = this.props
    const colorList = ['#5ab1ef', '#019680']
    this.state.chart.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          lineStyle: {
            width: 1,
            color: '#019680'
          }
        }
      },
      xAxis: {
        type: 'category',
        // boundaryGap: false,
        data: xAxisData,
        splitLine: {
          show: true,
          lineStyle: {
            width: 1,
            type: 'solid',
            color: 'rgba(226,226,226,0.5)'
          }
        },
        axisTick: {
          show: false
        }
      },
      yAxis: [
        {
          type: 'value',
          // max: 80000,
          splitNumber: 4,
          axisTick: {
            show: false
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(255,255,255,0.2)', 'rgba(226,226,226,0.2)']
            }
          }
        }
      ],
      grid: { left: '1%', right: '1%', top: '2  %', bottom: 0, containLabel: true },
      series: seriesData.map((item, index) => ({
        smooth: true,
        data: item,
        type: type,
        areaStyle: {},
        itemStyle: {
          color: colorList[index]
        },
        barWidth: 40
      }))
    })
  }
  render() {
    return <div ref={currentNode => (this.el = currentNode)} style={{ width: '100%', height: '340px' }}></div>
  }
}
