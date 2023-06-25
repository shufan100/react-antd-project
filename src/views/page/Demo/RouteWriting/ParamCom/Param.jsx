/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2022-11-15 14:22:06
 * @FilePath: \react-antd-project\src\views\page\Demo\RouteWriting\ParamCom\Param.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Param extends Component {
  back = () => {
    const { history } = this.props
    if (history.action === 'POP' || history.action === 'REPLACE') {
      history.replace('/demo/routeWriting')
    } else {
      history.goBack()
    }
  }
  goHome = () => {
    const { history } = this.props
    console.log(history);
    history.push('/')
  }

  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1 >接收Params路由参数</h1>
        <button onClick={() => this.goHome()}>1111</button> <br /> &nbsp;
        <button onClick={() => this.back()}>返回</button> <br /> &nbsp;
        <div>
          接收的params参数: ( id：<span style={{ color: 'red' }}> {params.id}</span> | title：<span style={{ color: 'red' }}>{params.title}</span> )
        </div>
      </div>
    )
  }
}
export default withRouter(Param)
