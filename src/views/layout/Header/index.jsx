import React, { Component } from 'react';
import { Layout } from 'antd';
import './index.scss';

const { Header } = Layout;
// import { Icon } from 'antd';

// import { StarOutlined, StarFilled, StarTwoTone } from '@ant-design/icons';
class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Header>
        header
        {/* <Icon style={{ color: 'rgba(0,0,0,.3)' }} type="caret-down" /> */}
        {/* <StarOutlined style={{ fontSize: '16px', color: '#08c' }} />
        <StarFilled />
        <StarTwoTone twoToneColor="#eb2f96" /> */}
      </Header>
    );
  }
}

export default LayoutHeader;
