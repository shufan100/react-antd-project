// import React, { Component, useState, memo, useMemo } from 'react';
import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { Layout, Dropdown, Avatar, Menu, Modal } from 'antd'
import { ExclamationCircleOutlined } from '@ant-design/icons'
// import store from '@/store';
import './index.less'
import { toggleSiderBar, toggleAsyncSiderBar, setTitleAction, removeTokenAction } from '@/store/actions'
import Icons from '@/components/Icons' // 动态icon
import FullScreen from './components/FullScreen' //全屏
import BreadCrumb from './components/BreadCrumb' //面包屑

const { Header } = Layout

const LayoutHeader = props => {
  const { sidebarCollapsed, userInfo } = props //redux属性
  console.log(userInfo)
  const { toggleSiderBar, toggleAsyncSiderBar, setTitleAction, removeTokenAction } = props //redux方法

  const dropdownClick = () => {
    Modal.confirm({
      title: '注销',
      icon: <ExclamationCircleOutlined />,
      content: '确定要退出系统吗?',
      okText: '确定',
      cancelText: '取消',
      onOk() {
        // store.dispatch(removeTokenAction());
        removeTokenAction()
        window.location.reload()
      },
      onCancel() {
        console.log('Cancel')
      }
    })
  }

  const menu = (
    <Menu
      items={[
        {
          label: (
            <span>
              <span>1</span>
              <Link to='/'>首页</Link>
            </span>
          )
        },
        {
          label: (
            <span onClick={dropdownClick}>
              <span>2</span>
              <span>注销</span>
            </span>
          )
        }
      ]}
    />
  )
  return (
    <Header className='hedaer-container'>
      <div>
        <Icons iconName={sidebarCollapsed ? 'MenuUnfoldOutlined' : 'MenuFoldOutlined'} size={20} click={sidebarCollapsed ? toggleSiderBar : () => toggleAsyncSiderBar(500)} />
        {/* <span>{sidebarCollapsed ? '同步aciton' : '异步aciton500'}</span> */}
        <BreadCrumb />
      </div>
      <div>
        <span style={{ marginRight: '10px' }} onClick={setTitleAction}>
          中/英
        </span>
        <FullScreen />
        <Dropdown overlay={menu} placement='bottom'>
          <div className='avatar'>
            <Avatar size={0} src={userInfo.avatar.default} />
            <span>{userInfo.role}</span>
            <Icons iconName='CaretDownOutlined' color='#ccc' size={16} top={2} />
          </div>
        </Dropdown>
      </div>
    </Header>
  )
}

// 第2步
const stateProps = state => ({
  ...state.app,
  ...state.user
})
const getActions = () => ({
  toggleSiderBar,
  toggleAsyncSiderBar,
  setTitleAction,
  removeTokenAction
})
// 2、通过connect加工组件，给组件上的props加上action方法,store属性,加工后props就有redures,aciton方法
export default connect(stateProps, getActions())(LayoutHeader)
