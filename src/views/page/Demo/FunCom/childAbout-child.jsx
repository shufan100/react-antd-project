import React, { useContext } from 'react';
import { AppContext } from './context.js';

export default function ChildAboutChild () {
  // 声明接收context
  const { aboutName, hookVal, hookName } = useContext(AppContext);
  return (
    <div className='grand'>
      <h1 style={{ color: 'red', fontWeight: 'bold' }}>------C后代组件(函数组件)------</h1>
      <h2>我从A组件接收到的用户名：{aboutName}</h2>
      <h4>{hookName} --- {hookVal}</h4>
      {/* 第二种方式 */}
      <AppContext.Consumer>
        {
          value => `第二种方式Consumer(公共):${value.aboutName}--${value.hookName}--${value.hookVal}`
        }
      </AppContext.Consumer>
    </div>
  );
}
