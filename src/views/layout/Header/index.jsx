// import React, { Component, useState, memo, useMemo } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Dropdown, Avatar, Menu } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, CaretDownOutlined } from '@ant-design/icons';
import store from '@/store';
import './index.less';
// 1，引用action方法
import { toggleSiderBar, toggleAsyncSiderBar, setTitleAction, removeTokenAction } from '@/store/actions';

const { Header } = Layout;


const LayoutHeader = props => {

  const { sidebarCollapsed, userInfo } = props;

  const getIcon = (sidebarCollapsed) => {
    let icon = sidebarCollapsed ?
      <span><MenuUnfoldOutlined className="header-icon" onClick={props.toggleSiderBar} />同步aciton</span>
      : <span><MenuFoldOutlined className="header-icon" onClick={() => props.toggleAsyncSiderBar(500)} />异步aciton</span>;
    return icon;
  };

  const dropdownClick = (e) => {
    // console.log(e, props);
    if (e.key === 'logout') {
      store.dispatch(removeTokenAction());
    }
  };
  const menu = (
    <Menu onClick={dropdownClick} >
      <Menu.Item key="home"><Link to="/home">首页</Link></Menu.Item>
      {/* <Menu.Item key="project">
        <a
          target="_blank"
          href="https://github.com/NLRX-WJC/react-antd-admin-template"
          rel="noopener noreferrer">
          项目地址
        </a>
      </Menu.Item> */}
      {/* <Menu.Divider /> */}
      <Menu.Item key="logout">注销</Menu.Item>
    </Menu>
  );

  return (
    <Header className='hedaer-container'>
      {getIcon(sidebarCollapsed)}
      <div>
        <Dropdown overlay={menu}>
          <div className='avatar'>
            <span onClick={setTitleAction}>中/英</span>
            <Avatar shape="square" size="medium" src={userInfo.avatar.default} />
            <CaretDownOutlined />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

const stateProps = state => ({
  ...state.app,
  ...state.user,
});
// 2、通过connect加工组件，给组件上的props加上action方法,store属性
export default connect(stateProps, { toggleSiderBar, toggleAsyncSiderBar, setTitleAction })(
  LayoutHeader
);

