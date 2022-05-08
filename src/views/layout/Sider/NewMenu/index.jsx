import React, { useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Menu } from 'antd';
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  SolutionOutlined,
  ApartmentOutlined,
} from '@ant-design/icons';
import './index.less';
import { Scrollbars } from 'react-custom-scrollbars';

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}
const items = [
  getItem('首页', '/home', <DesktopOutlined />),
  getItem('表单相关', 'formCom', <SolutionOutlined />, [
    getItem('表格', '/formCom/table'),
    getItem('表单', '/formCom/form'),
    getItem('富文本', '/formCom/markdown'),
  ]),
  getItem('案例', 'demo', <SolutionOutlined />, [
    getItem('写法', '/demo/contentDemo'),
    getItem('函数式组件', '/demo/funCom'),
    getItem('生命周期', '/demo/lifeCycle'),
  ]),
  getItem('多级嵌套路由', 'nested', <ApartmentOutlined />, [
    getItem('菜单2-1', '/nested/menu2_1'),
    getItem('菜单2-2', 'menu2_2', null, [
      getItem('菜单3-1', '/nested/menu2_2/menu3_1'),
      getItem('菜单3-2', '/nested/menu2_2/menu3_2'),
      getItem('菜单3-3', 'menu3_3', null, [
        getItem('菜单4-1', '/nested/menu2_2/menu3_3/menu4_1'),
        getItem('菜单4-2', '/nested/menu2_2/menu3_3/menu4_2'),
      ]),
    ]),
  ]),
  getItem('用户管理', '/user', <TeamOutlined />),
  getItem('作者', '/abouts', <UserOutlined />),
];

//
const NewMenu = () => {
  const history = useHistory();
  const location = useLocation();
  // const [defaultSelectedKey, setDefaultSelectedKeys] = useState('/home');

  // 初始化设置选中的父级菜单
  const defaultOpenKeys = () => {
    const arr = location.pathname.split('/');
    arr.shift(); //删除数组第一个元素

    // 1级路由
    if (arr.length === 1) return [];
    //2级及以上路由
    if (arr.length > 1) {
      arr.pop(); //删除数组最后一个元素
      return arr;
    }
  };
  // 初始化菜单选中
  const getDefaultSelectedKey = () =>
    location.pathname === '/' ? '/home' : location.pathname;
  // 函数式的生命周期
  useEffect(() => {
    // 组件挂载完成 componentDidMount
    window.console.log(history.location.pathname, location.pathname);
    return () => {
      //组件卸载前componentWillUnmount
    };
  }, []);
  // 路由跳转
  const menuCick = e => {
    // window.console.log(e, history);
    history.push(e.key);
  };

  return (
    <div className="sidebar-menu-container1">
      <Scrollbars autoHide autoHideTimeout={500} autoHideDuration={200}>
        <span style={{ color: 'red' }}>{}</span>
        <Menu
          onClick={menuCick}
          defaultSelectedKeys={[getDefaultSelectedKey()]}
          defaultOpenKeys={defaultOpenKeys()}
          mode="inline"
          theme="dark" //light dark
          items={items}
        />
      </Scrollbars>
    </div>
  );
};
export default NewMenu;
