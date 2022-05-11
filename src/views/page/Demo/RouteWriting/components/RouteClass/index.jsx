import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'


class RouteClass extends Component {
  render () {
    // console.log(this, '--')
    const { history } = this.props
    return (
      <div>
        <h1>Route (类式组件)</h1>
        <button onClick={e => history.push('/demo/reduxWriting')}>首页</button>
      </div>
    )
  }
}
export default withRouter(RouteClass)