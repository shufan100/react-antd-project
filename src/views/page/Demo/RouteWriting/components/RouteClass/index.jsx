import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'


class RouteClass extends Component {
  render () {
    const { history } = this.props
    return (
      <div>
        <h1>Route (类式组件)</h1>

        {/* 标签式路由 */}
        <Link to={'/home'}> 首页 </Link>
        <Link to={'/abouts'}> 作者 </Link><br /><br />

        {/* 编程式路由 */}
        <button onClick={e => history.push('/demo/param/9523/tom')}>Param传参 (push)</button>
        <button onClick={e => history.replace('/demo/param/8877/helen')}>Param传参 (replace)</button><br /><br />

        <button onClick={e => history.push(`/demo/search?id=${'9877'}&title22=${'小张'}`)}>Search传参 (push)</button>
        <button onClick={e => history.replace(`/demo/search?id=${'15138'}&title22=${'警察'}`)}>Search传参 (replace)</button><br /><br />

        <button onClick={e => history.push({ pathname: '/demo/state', state: { id: '9999', name: '小鸡' } })}>State传参 (push)</button>
        <button onClick={e => history.replace({ pathname: '/demo/state', state: { id: '7572', name: '吉马' } })}>State传参 (replace)</button><br /><br />
      </div>
    )
  }
}
export default withRouter(RouteClass)