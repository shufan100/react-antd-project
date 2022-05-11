import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
function State () {
  const history = useHistory()
  const location = useLocation()
  const state = location.state;

  console.log(location)

  const back = () => {
    if (history.action === 'POP' || history.action === 'REPLACE') {
      history.replace('/demo/routeWriting')
    } else {
      history.goBack()
    }
  }

  return (
    <div>
      <h1>接收State路由参数</h1>
      <button onClick={() => back()}>返回</button> <br /> &nbsp;
      <div>接收的State参数: ( id：<span style={{ color: 'red' }} > {state.id}</span> | title：<span style={{ color: 'red' }}>{state.name}</span> )</div>
    </div>
  )
}
export default State
