import React from 'react'
import { connect } from 'react-redux'
// import store from '@/store';
import { setCount, setCountAsync, resetCount } from '@/store/actions'


function ReduxFun (props) {
  const { title, count } = props //redures值
  const { setCount1, setCountAsync, resetCount } = props //actions方法

  const add = data => {
    // console.log(props)
    // store.dispatch(setCount(data))
    setCount1(data)
  };
  return (
    <div>
      <h1>{title}(函数式组件)</h1>

      <span>总计：{count}</span> &nbsp;
      <button onClick={e => add('1')}>add+1</button> &nbsp;
      <button onClick={e => setCount1('2')}>add+2</button> &nbsp;
      <button onClick={e => setCountAsync(3)}>asyncAdd+3</button> &nbsp;
      <button onClick={e => resetCount()}>reset</button> &nbsp;
    </div>
  )
}
const stateProps = state => ({
  ...state.fun
})
const getActions = () => ({
  setCount1: setCount,
  setCountAsync,
  resetCount
})
export default connect(stateProps, getActions())(ReduxFun)