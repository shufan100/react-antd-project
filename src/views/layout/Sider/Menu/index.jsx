import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { Menu } from 'antd';
import * as Icons from '@ant-design/icons';
import menuList from '@/config/menuCofig';
import './index.less';

const { SubMenu } = Menu;;

const Menus = (props) => {
  const [states, setStates] = useState({
    theme: 'dark', // 'light'
    selectedKey: ['/home'],
  });
  const history = useHistory();

  // 函数式仿生命周期
  useEffect(() => {
    // 组件加载完走
    console.log(history, 'history');
    return () => {
      // 卸载组件前走
    };
  }, []);

  // 动态显示icon
  const getMenuIcon = (icontype) => icontype && Icons[icontype] ? React.createElement(Icons[icontype]) : '';

  // 初始化菜单
  const getMenuNode = (List) => List.map((item, index) => {
    if (!item.children) {
      return (
        <Menu.Item key={item.path} icon={!item.children ? getMenuIcon(item.icon) : ''} >
          <Link to={item.path} >{item.title}</Link>
        </Menu.Item>
      );
    } else {
      return (
        <SubMenu key={item.path + item.index} icon={getMenuIcon(item.icon)} title={item.title}>
          {getMenuNode(item.children)}
        </SubMenu >
      );
    }
  });

  const handleClick = e => {
    // console.log('click ', e, props);
    const data = { ...states };
    data.selectedKey = [history.location.pathname];
    setStates(data);
  };
  return (
    <div className='sidebar-menu-container'>
      <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        <Menu
          onClick={handleClick}
          mode="inline"
          theme={states.theme}
          selectedKeys={states.selectedKey}>
          {getMenuNode(menuList)}
        </Menu>
      </Scrollbars>
    </div>

  );
};
// 给menu(一般组件)加工 路由三大属性、reducers
export default connect(state => state.app)(withRouter(Menus));