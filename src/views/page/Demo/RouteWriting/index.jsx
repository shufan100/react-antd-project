import React from 'react'

import RouteClass from './components/RouteClass'
import RouteFun from './components/RouteFun'

function RouteWriting () {
  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Route（路由）</h1>
      <div className='flex'>
        <RouteClass />
        <RouteFun />
      </div>
    </div>
  )
}
export default RouteWriting
