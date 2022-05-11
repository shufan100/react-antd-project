
import React, { Component } from 'react'
import { connect } from 'react-redux'
// import store from '@/store';
import { setCount, resetCount, setCountAsync } from '@/store/actions'


class ReduxClass extends Component {
  // 方法-----------------------------------
  add (data) {
    console.log(11111111111, data)
    // store.dispatch(setCount(data)) //原始写法
    this.props.setCount(data)
  }

  render () {
    const { title, count } = this.props //redures值
    const { setCount, resetCount, setCountAsync } = this.props //action方法
    // console.log(this)
    return (
      <div>
        <h1>{title}(类式组件)</h1>
        {/* 
          1、第一步：获取Redures的值
            1-1、通过connect连接redures,值在props里
          2、第二步：修改Redures的值
            2-1、引入action方法,通过connect连接action,方法在props里
            2-2、dispatch是通过store中间商去处理redures值（因为使用了redux-thunk中间件，所有可以省略写dispatch）
        */}
        <span>总计：{count}</span> &nbsp;
        <button onClick={e => this.add('1')}>add+1</button> &nbsp;
        <button onClick={e => setCount('2')}>add+2</button> &nbsp;
        <button onClick={e => setCountAsync(3)}>asyncAdd+3</button> &nbsp;
        <button onClick={e => resetCount()}>reset</button> &nbsp;
      </div>
    )
  }
}
// redures\action接收的都是对象
export default connect(state => state.fun, { setCount, resetCount, setCountAsync })(ReduxClass);