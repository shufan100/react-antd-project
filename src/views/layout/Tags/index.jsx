import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteTags } from '@/store/actions'
import { Tag } from 'antd'
import './index.less'
class Tags extends Component {
  close = (e, item) => {
    e.preventDefault()
    console.log(e, item, '--')
    const { history, deleteTags, taglist } = this.props
    const path = item.path
    const currentPath = history.location.pathname
    const length = taglist.length
    // 如果关闭的是当前页，跳转到最后一个tag
    if (path === currentPath) {
      history.push(taglist[length - 1].path)
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (path === taglist[length - 1].path && currentPath === taglist[length - 1].path) {
      // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        history.push(taglist[length - 2].path)
      } else if (length === 2) {
        history.push(taglist[0].path)
      }
    }
    // 先跳转路由，再修改state树的taglist
    deleteTags(item)
  }
  render() {
    console.log(this.props)
    const { taglist } = this.props
    // const { deleteTags } = this.props
    return (
      <>
        {taglist.map(i => (
          <Tag key={i.key} closable onClose={e => this.close(e, i)}>
            {i.label}
          </Tag>
        ))}
      </>
    )
  }
}

export default withRouter(connect(state => state.tags, { deleteTags })(Tags))
