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

  render() {
    const { params } = this.props.match
    return (
      <div>
        <h1>接收Params路由参数</h1>
        <button onClick={() => this.back()}>返回</button> <br /> &nbsp;
        <div>
          接收的params参数: ( id：<span style={{ color: 'red' }}> {params.id}</span> | title：<span style={{ color: 'red' }}>{params.title}</span> )
        </div>
      </div>
    )
  }
}
export default withRouter(Param)
