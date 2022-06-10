import React, { useState } from 'react'
import './index.less'

import BasisTable from './components/BasisTable'
import JsxTable from './components/JsxTable'

export default function Tables() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1500)
  return (
    <div className='tables'>
      <h2>Table组件示例</h2>
      <BasisTable loading={loading}></BasisTable>
      <JsxTable loading={loading}></JsxTable>
    </div>
  )
}
