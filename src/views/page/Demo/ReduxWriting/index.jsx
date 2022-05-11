import React from 'react'
import { connect } from 'react-redux'


import ReduxClass from './components/ReduxClass'
import ReduxFun from './components/ReduxFun'

function ReduxWriting (props) {
  return (
    <div>
      <h1>Redux</h1>
      <ul style={{ textAlign: 'center' }}>
        <li >总结：{props.count}</li>
      </ul>
      <div className='flex'>
        <ReduxClass />
        <ReduxFun />
      </div>
    </div>
  )
}
export default connect(state => state.fun)(ReduxWriting)
