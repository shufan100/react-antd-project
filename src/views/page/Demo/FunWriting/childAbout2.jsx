import React, { Component } from 'react';
import { AppContext } from './context.js';
import ChildAbout2Child from './childAbout2-child';

export default class childAbout2 extends Component {
  // 声明接收context
  static contextType = AppContext;
  render () {
    const { aboutName, hookName, hookVal } = this.context;
    return (
      <>
        <div className='child2'>
          <h1 style={{ color: 'red', fontWeight: 'bold' }}>----B2子组件(类组件)----</h1>
          <h2>我从A组件接收到的用户名：{aboutName}</h2>
          <h4>{hookName} --- {hookVal}</h4>
          <h4>props接收的值》》》{this.props.name}</h4>
          <ChildAbout2Child />
        </div>
      </ >
    );
  }
}
