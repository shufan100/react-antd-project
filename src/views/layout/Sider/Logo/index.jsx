import React from 'react'
import { connect } from 'react-redux'
import logo from '@/assets/images/logo.svg'
import './index.scss'

const Logo = props => {
  const { isTitle } = props
  return (
    <div className='sidebar-logo-container'>
      <img src={logo} className='sidebar-logo' alt='logo' />
      <h2 className='sidebar-title'>{isTitle ? '舒梵-React' : 'SHUFAN-REACT'}</h2>
    </div>
  )
}
export default connect(state => state.app)(Logo)
