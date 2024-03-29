import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { deleteTags } from '@/store/actions'
import { Tag } from 'antd'
import './index.less'
class Tags extends Component {
  componentDidMount() {
    // console.log(11)
  }
  // 关闭
  close = (e, item) => {
    e.preventDefault()
    console.log(e, item, '--')
    const { history, deleteTags, taglist } = this.props
    const key = item.key
    const currentPath = history.location.pathname
    const length = taglist.length
    // 如果关闭的是当前页，跳转到最后一个tag
    if (key === currentPath) {
      history.push(taglist[length - 1].key)
    }
    // 如果关闭的是最后的tag ,且当前显示的也是最后的tag对应的页面，才做路由跳转
    if (key === taglist[length - 1].key && currentPath === taglist[length - 1].key) {
      // 因为cutTaglist在最后执行，所以跳转到上一个tags的对应的路由，应该-2
      if (length - 2 > 0) {
        history.push(taglist[length - 2].key)
      } else if (length === 2) {
        history.push(taglist[0].key)
      }
    }
    // 先跳转路由，再修改state树的taglist
    deleteTags(item)
  }
  // 点击tag切换
  handleClick = key => {
    console.log(key)
    this.props.history.push(key)
  }
  render() {
    const { taglist, history } = this.props
    const currentPath = history.location.pathname
    // console.log(taglist, history.location, 'taglist', currentPath)
    return (
      <div className='tagsView-container'>
        {taglist &&
          taglist.map(i => (
            <Tag
              key={i.key}
              closable={i.key !== '/home' || taglist.length === 0}
              onClose={e => this.close(e, i)}
              color={currentPath === i.key ? 'gold' : 'geekblue'}
              onClick={() => this.handleClick(i.key)}
            >
              {i.label}
            </Tag>
          ))}
      </div>
    )
  }
}

export default withRouter(connect(state => state.tags, { deleteTags })(Tags))
