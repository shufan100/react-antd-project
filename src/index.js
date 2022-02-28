import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
// import 'antd/dist/antd.css'; //配置了主题颜色就不需要引了
// import reportWebVitals from './reportWebVitals';  // 页面性能分析文件

/** 执行了ReactDOM.render()发生了什么？
 * ReactDOM.render( 虚拟dom, 容器 );
 * 1、react解析组件标签，找到App组件
 * 2、发现组件事使用类定义的，随后new出来该类的实例，并通过该实例调用到原型上的render方法
 * 3、将render返回的虚拟DOM转为真实DOM，随后呈现在页面上
*/
// 渲染组件到页面  React.StrictMode:检查代码里不太合理的地方
ReactDOM.render(<React.StrictMode> <App /> </React.StrictMode>, document.getElementById('root'));

// reportWebVitals();





// *******创建虚拟dom的两种方式*********
/** 关于虚拟dom:
 * 1、虚拟dom本质是object类型的对象
 * 2、虚拟dom比较'轻（属性少）'，真实dom比较重（属性多）,因为虚拟dom是react内部在用，无需真实dom上那么多属性
 * 3、虚拟dom最终会被react转化为真实dom.呈现在页面上
*/

/****例子1：jsx创建虚拟dom** 
  const VDOM = <h2 id='title'>hello world</h2>;  // 使用jsx创建的虚拟dom1
  const VDOM2 = (   // 使用jsx创建的虚拟dom2  括号代表一个整体
    <div>
      <h2 id='title'>hello world</h2>
      <span>111</span>
    </div>
  );  
  ReactDOM.render(VDOM2, document.getElementById('root'));
  console.log('虚拟dom',VDOM)  // object
  console.log('真实dom', document.getElementById('root'))  // 真实的标签
*/


/** **例子2：js创建虚拟dom**
  const demo = document.createElement('标签名','标签属性','标签内容'); 
  const DOM = document.createElement('h2',{id:'title'},'hello world');  // 使用js创建的真实dom
  const VDOM = React.createElement('h2',{id:'title'},'hello world');  // 使用js创建的虚拟dom
  ReactDOM.render( VDOM, document.getElementById('root') );
*/





