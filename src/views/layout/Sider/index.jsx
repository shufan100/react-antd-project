import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
// import Menu from "./Menu";
import { Layout } from 'antd';
import Logo from './Logo';
const { Sider } = Layout;
class LayoutSider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render () {
    const { sidebarCollapsed, code } = this.props;
    return (
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
        trigger={null}
        width={200}
        style={{ zIndex: '10' }}
        className="LayoutSider">
        <Logo />

        <h1 style={{ color: 'red' }}>
          {/* react的布尔值，空字符串，null都不在结构显示 */}
          {sidebarCollapsed}
          <div>{code}</div>
          <div><NavLink activeClassName="active22" to="/home">首页</NavLink></div>
          <div><NavLink activeClassName="active22" to="/shopping">声明周期</NavLink></div>
          <div><NavLink activeClassName="active22" to="/about">函数式组件</NavLink></div>
        </h1>
        {/* <Menu /> */}
      </Sider>
    );
  }
}
const mapStateToProps = state => ({
  ...state.app,
});
export default connect(mapStateToProps)(LayoutSider);
