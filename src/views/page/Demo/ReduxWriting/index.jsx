import React from 'react'
import { connect } from 'react-redux'


import ReduxClass from './components/ReduxClass'
import ReduxFun from './components/ReduxFun'
import ReduxDemo from './components/ReduxDemo'

import reduxImg from '@/assets/images/redux.png'

function ReduxWriting (props) {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Redux</h1>
      <ul style={{ textAlign: 'center' }}>
        <li >总结：{props.count}</li>
      </ul>
      <div className='flex'>
        <ReduxClass />
        <ReduxFun />
      </div>&nbsp;
      <img style={{ margin: '30px 0', border: '1px solid #000' }} src={reduxImg} alt="" />

      <ReduxDemo />
    </div>
  )
}
export default connect(state => state.fun)(ReduxWriting)
