import React, { Component, Fragment } from 'react';
import { AppContext } from './context.js';

export default class childAbout2Child extends Component {
  // 声明接收context
  static contextType = AppContext;
  render () {
    console.log(this, 'AppContext');
    const { aboutName, hookName, hookVal } = this.context;
    return (
      <Fragment>
        <div className='grand2'>
          <h1 style={{ color: 'red', fontWeight: 'bold' }}>----C2子组件(类组件)----</h1>
          <h2>我从A组件接收到的用户名：{aboutName}</h2>
          <h4>{hookName} --- {hookVal}</h4>
          {/* 第二种方式 */}
          <AppContext.Consumer>
            {
              value => <span>第二种方式Consumer(公共):{value.aboutName}--{value.hookName}--{value.hookVal}</span>
            }
          </AppContext.Consumer>
        </div>
      </Fragment>
    );
  }
}
