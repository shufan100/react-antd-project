import React from 'react'
import PropsClass from './components/PropsClass'
import PropsFun from './components/PropsFun'

function PropsWriting () {
  return (
    <div>
      <h1>Props</h1>
      <div className='flex'>
        <PropsClass />
        <PropsFun />
      </div>
    </div>
  )
}
export default PropsWriting
