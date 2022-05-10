import React, { useEffect } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars';
import { Menu } from 'antd';
import './index.less';
// 菜单
import menuCofig from '@/config/menuCofig'
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
        <span style={{ color: 'red' }}>{ }</span>
        <Menu
          onClick={menuCick}
          defaultSelectedKeys={[getDefaultSelectedKey()]}
          defaultOpenKeys={defaultOpenKeys()}
          mode="inline"
          theme="dark" //light dark
          items={menuCofig}
        />
      </Scrollbars>
    </div>
  );
};
export default NewMenu;
