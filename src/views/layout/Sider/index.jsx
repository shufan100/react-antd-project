import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Layout } from 'antd'
// import Menu from './Menu';
import NewMenu from './NewMenu'
import Logo from './Logo'
const { Sider } = Layout
class LayoutSider extends Component {
  render() {
    const { sidebarCollapsed } = this.props
    return (
      <Sider collapsible collapsed={sidebarCollapsed} trigger={null} width={200} style={{ zIndex: '10' }} className='LayoutSider'>
        <Logo />
        {/* <Menu /> */}
        <NewMenu />
      </Sider>
    )
  }
}
const mapStateToProps = state => ({
  ...state.app
})
export default connect(mapStateToProps)(LayoutSider)
