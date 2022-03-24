import React, { Component, useState } from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  MailOutlined,
} from '@ant-design/icons';


const { SubMenu } = Menu;


class Menus extends Component {
  state = {
    theme: 'dark'
  }
  handleClick = (e) => {
    console.log('click ', e);
  }
  render () {
    const selectedKey = [this.props.location.pathname];
    console.log(this.props, selectedKey);
    return (
      <Menu
        onClick={this.handleClick}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme={this.state.theme}
        inlineCollapsed={this.props.sidebarCollapsed}
        selectedKeys={selectedKey}>


        <Menu.Item key="/home/brouter" icon={<DesktopOutlined />}><Link to="/home">首页</Link> </Menu.Item>
        <Menu.Item key="/shopping" icon={<PieChartOutlined />}><Link to="/shopping">生命周期</Link></Menu.Item>
        <Menu.Item key="/about" icon={<ContainerOutlined />}><Link to="/about">函数式组件</Link></Menu.Item>
        <SubMenu key="2" icon={<MailOutlined />} title="Navigation One">
          <Menu.Item key="/home/brouter"><Link to="/home/brouter">首页</Link></Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
          <Menu.Item key="7">Option 7</Menu.Item>
          <Menu.Item key="8">Option 8</Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
          <Menu.Item key="9">Option 9</Menu.Item>
          <Menu.Item key="10">Option 10</Menu.Item>
          <SubMenu key="sub3" title="Submenu">
            <Menu.Item key="11">Option 11</Menu.Item>
            <Menu.Item key="12">Option 12</Menu.Item>
          </SubMenu>
        </SubMenu>
      </Menu>
    );
  }
}

// const Menus = (props) => {
//   // state
//   const [theme, setTheme] = useState('dark'); // 'light'


//   const handleClick = e => {
//     console.log('click ', e, props);

//   };
//   return (
//     <Menu
//       onClick={handleClick}
//       defaultSelectedKeys={['1']}
//       defaultOpenKeys={['sub1']}
//       mode="inline"
//       theme={theme}
//       inlineCollapsed={props.sidebarCollapsed}
//       selectedKeys={[]} {/* selectedKeys:选中状态 */}
//     >


//       <Menu.Item key="/home" icon={<DesktopOutlined />}><Link to="/dashboard">首页</Link> </Menu.Item>
//       <Menu.Item key="/about" icon={<PieChartOutlined />}> 生命周期</Menu.Item>
//       <Menu.Item key="3" icon={<ContainerOutlined />}>函数式组件</Menu.Item>
//       <SubMenu key="sub1" icon={<MailOutlined />} title="Navigation One">
//         <Menu.Item key="5">Option 5</Menu.Item>
//         <Menu.Item key="6">Option 6</Menu.Item>
//         <Menu.Item key="7">Option 7</Menu.Item>
//         <Menu.Item key="8">Option 8</Menu.Item>
//       </SubMenu>
//       <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Navigation Two">
//         <Menu.Item key="9">Option 9</Menu.Item>
//         <Menu.Item key="10">Option 10</Menu.Item>
//         <SubMenu key="sub3" title="Submenu">
//           <Menu.Item key="11">Option 11</Menu.Item>
//           <Menu.Item key="12">Option 12</Menu.Item>
//         </SubMenu>
//       </SubMenu>
//     </Menu>
//   );
// };
// 给menu(一般组件)加工 路由三大属性、reducers
export default connect(state => state.app)(withRouter(Menus));