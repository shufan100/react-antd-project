import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';

import { Menu } from 'antd';
import menuList from '@/config/menuCofig';
import Icons from '@/components/Icons'; // 动态icon
import './index.less';

const { SubMenu } = Menu;

const Menus = props => {
  const [states, setStates] = useState({
    theme: 'dark', // 'light'
    selectedKey: [],
  });
  // const history = useHistory();

  // 函数式仿生命周期
  useEffect(() => {
    // 组件加载完走
    window.console.log(states.theme, '111');

    return () => {
      // 卸载组件前走
    };
  }, []);

  // 初始化菜单
  const getMenuNode = List =>
    List.map((item, index) => {
      if (!item.children) {
        return (
          <Menu.Item
            key={item.path}
            icon={!item.children ? <Icons iconName={item.icon} /> : ''}
          >
            <Link to={item.path} title={item.path}>
              {item.title}
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={item.path}
            icon={<Icons iconName={item.icon} />}
            title={item.title}
          >
            {getMenuNode(item.children)}
          </SubMenu>
        );
      }
    });

  const handleClick = e => {
    // getParentName(menuList, false);
    // console.log('click ', e, props);
    // const data = { ...states };
    // data.selectedKey = [history.location.pathname];
    // setStates(data);
  };
  // 查找当前路由并获取父级路由
  const getParentName = (list, bool) => {
    // console.log(list, '---');
    const pathname = props.location.pathname;
    list.forEach(i => {
      if (i.path === pathname) {
        const data = { ...states };
        data.selectedKey = bool ? i.parentPath : [i.path];
        setStates(data);
      } else {
        //
        if (states.selectedKey === 0 && i.children) {
          getParentName(i.children, true);
        }
      }
    });
    return states.selectedKey;
  };
  // 初始化设置选中父级和子级
  const defaultOpenKeys = () => {
    const arr = props.location.pathname.split('/');
    // 1级路由
    if (arr.length === 2) return [];
    // 2级路由
    if (arr.length === 3) {
      //只有2级
      return [`/${arr[1]}`];
    }
    // 超过2级路由
    if (arr.length > 3) {
      return getParentName(menuList, false);
    }
  };
  return (
    <div className="sidebar-menu-container">
      <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        <Menu
          mode="inline"
          theme={states.theme}
          defaultSelectedKeys={[props.location.pathname]} //初始化子级菜单
          defaultOpenKeys={defaultOpenKeys()} //初始化父级菜单
          onClick={handleClick}
        >
          {getMenuNode(menuList)}
        </Menu>
      </Scrollbars>
    </div>
  );
};
// 给menu(一般组件)加工 路由三大属性、reducers
export default connect(state => state.app)(withRouter(Menus));
