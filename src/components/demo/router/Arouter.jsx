import React, { Component } from 'react';

export default class Arouter extends Component {
  render() {
    console.log('路由组件接收的props:', this.props);
    return <div>二级路由--Arouter.......</div>;
  }
}
