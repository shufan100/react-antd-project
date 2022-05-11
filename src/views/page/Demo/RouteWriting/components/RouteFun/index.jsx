import React from 'react'
import { useHistory } from 'react-router-dom'

function RouteFun () {
  const history = useHistory()
  return (
    <div>
      <h1>Route (函数式组件)</h1>
      <button onClick={() => history.push('/demo/propsWriting')}>111</button>
    </div>
  )
}
export default RouteFun