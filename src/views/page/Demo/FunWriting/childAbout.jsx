import React, { useContext, Fragment } from 'react';
import { AppContext } from './context.js';
import ChildAboutChild from './childAbout-child';

export default function ChildAbout (props) {
  // 声明接收context
  const { aboutName, hookVal, hookName } = useContext(AppContext);
  return (
    // Fragment：最终不会渲染成dom,渲染后会丢弃,循环可以写key
    <Fragment key={'1'}>
      <div className='child'>
        <h1 style={{ color: 'red', fontWeight: 'bold' }}>----B子组件(函数组件)----</h1>
        <h2>我从A组件接收到的用户名：{aboutName}</h2>
        <h4>{hookName} --- {hookVal}</h4>
        <h4>props接收的值》》》{props.name}</h4>
        <ChildAboutChild />
      </div>
    </Fragment>
  );
}
