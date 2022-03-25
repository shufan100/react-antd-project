import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter, useHistory } from 'react-router-dom';
import { Menu } from 'antd';
import * as Icons from '@ant-design/icons';
import menuList from '@/config/menuCofig';

const { SubMenu } = Menu;;

// 在这里路由导航（点击跳转）
// class Menus extends Component {
//   state = {
//     theme: 'dark'
//   }
//   getMenuIcon = (icontype) => icontype && Icons[icontype] ? React.createElement(Icons[icontype]) : ''
//   handleClick = (e) => {
//     console.log('click ', e);
//   }
//   render () {
//     const selectedKey = [this.props.location.pathname];
//     console.log(this.props, selectedKey);
//     return (
//       <Menu
//         onClick={this.handleClick}
//         defaultSelectedKeys={['1']}
//         defaultOpenKeys={['sub1']}
//         mode="inline"
//         theme={this.state.theme}
//         inlineCollapsed={this.props.sidebarCollapsed}
//         selectedKeys={selectedKey}>
//         <Menu.Item key="/home" icon={this.getMenuIcon('PieChartOutlined')}><Link to="/home"> 首页</Link> </Menu.Item>
//         <Menu.Item key="/shopping" icon={<PieChartOutlined />}><Link to="/shopping">生命周期</Link></Menu.Item>
//         <Menu.Item key="/about" icon={<ContainerOutlined />}><Link to="/about">函数式组件</Link></Menu.Item>
//         <SubMenu key="2" icon={<MailOutlined />} title="Navigation One">
//           <Menu.Item key="6">Option 6</Menu.Item>
//           <Menu.Item key="7">Option 7</Menu.Item>
//           <Menu.Item key="8">Option 8</Menu.Item>
//         </SubMenu>
//         <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
//           <Menu.Item key="9">Option 9</Menu.Item>
//           <Menu.Item key="10">Option 10</Menu.Item>
//           <SubMenu key="sub3" title="Submenu">
//             <Menu.Item key="11">Option 11</Menu.Item>
//             <Menu.Item key="12">Option 12</Menu.Item>
//           </SubMenu>
//         </SubMenu>
//       </Menu>
//     );
//   }
// }

const Menus = (props) => {
  // state
  // const [theme] = useState('dark'); // 'light'
  const [states, setStates] = useState({
    theme: 'dark', // 'light'
    selectedKey: ['/home'],
  });
  const history = useHistory();

  // 函数式仿生命周期
  useEffect(() => {
    console.log(history, 'history');

    // 组件加载完走
    // const newMenuTreeNode = getMenuNodes2();
    // setMenuTreeNode(newMenuTreeNode);
    // console.log(add(), newMenuTreeNode, '---');
    // return () => {
    //   // 卸载组件前走
    // };
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
    <Menu
      onClick={handleClick}
      mode="inline"
      theme={states.theme}
      selectedKeys={states.selectedKey}>
      {getMenuNode(menuList)}
    </Menu>

  );
};
// 给menu(一般组件)加工 路由三大属性、reducers
export default connect(state => state.app)(withRouter(Menus));