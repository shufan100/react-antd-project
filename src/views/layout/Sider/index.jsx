import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import Menu from './Menu';
import { Layout, Icon } from 'antd';
import Logo from './Logo';
import * as Icons from '@ant-design/icons';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';
const { Sider } = Layout;
class LayoutSider extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {};
  // }
  getMenuIcon = (icontype) => icontype && Icons[icontype] ? React.createElement(Icons[icontype]) : ''
  render () {
    const { sidebarCollapsed } = this.props;
    return (
      <Sider
        collapsible
        collapsed={sidebarCollapsed}
        trigger={null}
        width={200}
        style={{ zIndex: '10' }}
        className="LayoutSider">
        <Logo />
        <Menu />
        {/* <h1 style={{ color: 'red' }}>
          <div><NavLink activeClassName="active22" to="/home">首页</NavLink></div>
          <div><NavLink activeClassName="active22" to="/shopping">声明周期</NavLink></div>
          <div><NavLink activeClassName="active22" to="/about">函数式组件</NavLink></div>
        </h1> */}
        {/* <div style={{ color: 'red' }}>{this.getMenuIcon('DesktopOutlined')}</div> */}

      </Sider>
    );
  }
}
const mapStateToProps = state => ({
  ...state.app,
});
export default connect(mapStateToProps)(LayoutSider);
