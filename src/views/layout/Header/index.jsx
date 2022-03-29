// import React, { Component, useState, memo, useMemo } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Layout, Dropdown, Avatar, Menu, Modal } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import store from '@/store';
import './index.less';
// 第一步：引用aciton方法
import { toggleSiderBar, toggleAsyncSiderBar, setTitleAction, removeTokenAction } from '@/store/actions';
import Icons from '@/components/Icons';

const { Header } = Layout;;


const LayoutHeader = props => {

  const { sidebarCollapsed, userInfo } = props; //属性
  // 第3步、引用aciton方法自己会触发dispatch，然后再组件内直接用就行
  const { toggleSiderBar, toggleAsyncSiderBar, setTitleAction, removeTokenAction } = props; //方法

  // const getIcon = (sidebarCollapsed) => {
  //   let icon = sidebarCollapsed ?
  //     <span><MenuUnfoldOutlined className="header-icon" onClick={props.toggleSiderBar} />同步aciton</span>
  //     : <span><MenuFoldOutlined className="header-icon" onClick={() => props.toggleAsyncSiderBar(500)} />异步aciton</span>;
  //   return icon;
  // };

  const dropdownClick = (e) => {
    if (e.key === 'logout') {
      Modal.confirm({
        title: '注销',
        icon: <ExclamationCircleOutlined />,
        content: '确定要退出系统吗?',
        okText: '确定',
        cancelText: '取消',
        onOk () {
          // store.dispatch(removeTokenAction());
          removeTokenAction();
        },
        onCancel () {
          console.log('Cancel');
        },
      });
    }
  };

  const menu = (
    <Menu onClick={dropdownClick} >
      <Menu.Item key="home"><Link to="/">首页</Link></Menu.Item>
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
      <div >
        <Icons iconName={sidebarCollapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'} size={20} click={sidebarCollapsed ? toggleSiderBar : () => toggleAsyncSiderBar(500)} />
        <span>{sidebarCollapsed ? '同步aciton' : '异步aciton500'}</span>
        {/* {getIcon(sidebarCollapsed)} */}
      </div>
      <div>
        <span style={{ marginRight: '10px' }} onClick={setTitleAction}>中/英</span>
        <Icons iconName='FullscreenOutlined' size={24} toolTitle='全屏' />
        <Dropdown overlay={menu} >
          <div className='avatar'>
            <Avatar size={38} src={userInfo.avatar.default} />
            <Icons iconName='CaretDownOutlined' color='#ccc' size={16} top={12} />
          </div>
        </Dropdown>
      </div>
    </Header>
  );
};

// 第2步
const stateProps = state => ({
  ...state.app,
  ...state.user,
});
const getActions = () => ({
  toggleSiderBar,
  toggleAsyncSiderBar,
  setTitleAction,
  removeTokenAction
});
// 2、通过connect加工组件，给组件上的props加上action方法,store属性,加工后props就有redures,aciton方法
export default connect(stateProps, getActions())(LayoutHeader);

