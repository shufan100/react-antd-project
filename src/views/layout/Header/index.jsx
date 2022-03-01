// import React, { Component, useState, memo, useMemo } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';
import store from '@/store';
import './index.scss';
// 1，引用action方法
import { toggleSiderBar, toggleAsyncSiderBar, setTitleAction } from '@/store/actions';



const { Header } = Layout;
class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentWillMount() {
  //   console.log(111);
  // }
  // 组件挂载完毕（mounted）
  // componentDidMount() {
  //   this.add();
  // }
  add () {
    // console.log(this.props);
  }
  setTitle () {
    store.dispatch({
      type: 'APP_SET_TITLE',
    });
  }
  render () {
    // console.log(this.props);
    // 3、props引用方法
    const { toggleSiderBar, setTitleAction, toggleAsyncSiderBar } = this.props;

    let Icon = null;
    // 4、事件使用+传递参数
    if (this.props.sidebarCollapsed) {
      Icon = (
        <span><MenuUnfoldOutlined className="header-icon" onClick={toggleSiderBar} />同步aciton</span>
      );
    } else {
      Icon = (
        <span><MenuFoldOutlined className="header-icon" onClick={() => toggleAsyncSiderBar(1000)} />异步aciton</span>
      );
    }
    return (
      <Header>
        {/* 收缩菜单 */}
        {Icon}&nbsp;&nbsp;&nbsp;
        {/* <span onClick={this.setTitle.bind(this)}>中/英</span> */}
        <span onClick={setTitleAction}>中/英</span>
      </Header>
    );
  }
}

const stateProps = state => ({
  ...state.app,
  ...state.user,
});
// 2、通过connect加工组件，给组件上的props加上action方法
export default connect(stateProps, { toggleSiderBar, toggleAsyncSiderBar, setTitleAction })(
  LayoutHeader
);

