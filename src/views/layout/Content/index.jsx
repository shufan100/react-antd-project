import React, { Component } from 'react';
import { Layout } from 'antd';
const { Content } = Layout;
class LayoutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Content>
        中间内如，动态
        <span>2222</span>
      </Content>
    );
  }
}

export default LayoutContent;
