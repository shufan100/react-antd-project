import React, { Component } from 'react';
// import Menu from "./Menu";
import { Layout } from 'antd';
import Logo from './Logo';
const { Sider } = Layout;
class LayoutSider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Sider
        collapsible
        collapsed={false}
        trigger={null}
        width="300px"
        style={{ zIndex: '10' }}
        // eslint-disable-next-line react/jsx-closing-bracket-location
      >
        <Logo />
        {/* <Menu /> */}
      </Sider>
    );
  }
}

export default LayoutSider;
