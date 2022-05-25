// PureComponent代替component，阀门生命周期的就不用写了，PureComponent会自动写好阀门的对比逻辑：从而提示组件在数据没变化的时候不会render组件
// import React, { Component, PureComponent } from 'react';
import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { PropTypes } from 'prop-types'
import { connect } from 'react-redux'

import { Button } from 'antd'
import './index.scss'

// 引用事例
import JsxDemo from './components/jsx'
import ClickDemo from './components/click'
import DiffDemo from './components/diff'
import RefDemo from './components/ref'

import AaxiosDemo from './components/axios/Aaxios'
import BaxiosDemo from './components/axios/Baxios'

// ---------------------------------类式组件-----------------------------------------------------------

// class LayoutContentClass extends PureComponent {
class LayoutContentClass extends Component {
  // 渲染1次 构造器能省略就省略不写
  // constructor(props) {
  //   super(props);
  //   // this.state= {name:'11'}
  //   // this.add = this.add.bind(this)
  //   // console.log('Content-constructor');
  // }

  // *********初始化状态state**********************************************************
  state = {
    opacity: 1,
    sex: '女',
    address: '中国北京。。。',
    count: 0,
    newsArr: [],
    hasError: ''
  }

  // {/************************* setState *****************************************************************/}
  // 对象式setState：如果新状态不依赖于原状态，比如点击直接等于99
  addCount = () => {
    this.setState({ count: 99 })
  }
  // 函数式setState：如果新状态依赖于原状态 ===> 使用函数方式，修改原来的数据
  addCount2 = () => {
    // 1、setState函数式写法
    this.setState((state, props) => {
      console.log(state, props)
      return { count: state.count + 1 }
    })
    // 2、setState对象式写法
    // const { count } = this.state;
    // this.setState({ count: count + 1 });
  }

  // {/************************* 生命周期函数 *****************************************************************/}
  // （阀门）控制组件更新的阀门; state状态改变触发的生命周期钩子
  // (开发不用写，使用PureComponent代替，会自动给我们匹配)
  shouldComponentUpdate(nextProps, nextState) {
    // 不写，react默认会在后台加这钩子并返回true,写了返回false,生命周期就不往下走了
    // this.props,this.state：修改数据前的props和state
    // nextProps,nextState：修改后的变化的props,state
    // 数据不改变就不更当前新组件
    console.log('Content-shouldComponentUpdate')
    // console.log(this.state.count, nextState.count);
    // return !this.state.count === nextState.count; //根据数据是否改变，来渲染组件
    return true //根据数据是否改变，来渲染组件
  }

  // 组件挂载完毕的钩子（mounted）(*常用*)  初始化，发生ajax
  componentDidMount() {
    console.log('Content-componentDidMount')
    // this.timer2 = setInterval(() => {
    //   const { newsArr } = this.state;
    //   const news = `新闻${newsArr.length + 1}`;
    //   this.setState({ newsArr: [news, ...newsArr] });
    // }, 1000);
  }
  // (新增) 当组件的数据完全使用props传递进来的才用的生命周期钩子
  static getDerivedStateFromProps(props, state) {
    console.log('Content-getDerivedStateFromProps')
    return null
  }
  // (新增)的两个生命周期钩子：
  getSnapshotBeforeUpdate() {
    console.log('Content-getSnapshotBeforeUpdate')
    return this.listRef.scrollHeight
  }
  // 组件已经更新生命周期钩子
  componentDidUpdate(preProps, preState, height) {
    // console.log('Content-componentDidUpdate'); //111
    // this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
    this.listRef.scrollTop += this.listRef.scrollHeight - height
  }

  // 组件将要卸载的钩子  (*常用*)
  componentWillUnmount() {
    clearInterval(this.timer2)
    console.log('Content-componentWillUnmount')
  }

  // 1、初始化渲染,状态更新之后渲染 、(渲染 1+n次，每次修改数据都会重新渲染 jsx)
  // 2、在class类内部定义的方法已经自动开启了严格模式，类内部方法的this不指向window
  render() {
    // render中的this —— LayoutContent的实例对象
    return (
      //下面的结构不是真正的html，是jsx,虚拟dom，需要ReactDOMx渲染成真实的html标签显示在页面
      <div className='layoutContent' id='LayoutContentClass'>
        <h1 style={{ color: 'red', textAlign: 'center' }}>类式组件写法</h1>
        {/*************************  事例+getSnapshotBeforeUpdate *****************************************************************/}
        {/* <div className='list' ref='list'> */}
        <div className='list' ref={c => (this.listRef = c)}>
          {this.state.newsArr.map((n, index) => (
            <div key={index} className='news'>
              {n}
            </div>
          ))}
        </div>

        <JsxDemo />
        {/* 批量props传值：展开运算符的写法是一个个写的语法糖 */}
        <ClickDemo />
        <DiffDemo />
        <RefDemo />

        <AaxiosDemo />
        <BaxiosDemo />
      </div>
    )
  }
}

// connect用这个方法reducers才监听的到
export default connect(state => state.user)(LayoutContentClass)
