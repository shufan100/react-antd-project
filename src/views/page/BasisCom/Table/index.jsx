import React, { useState } from 'react'
import './index.less'

import BasisTable from './components/BasisTable'
import JsxTable from './components/JsxTable'
import FetchTable from './components/FetchTable'
import SelectTable from './components/SelectTable'
import GroupTable from './components/GroupTable'
import NestedTable from './components/NestedTable'
import DragTable from './components/DragTable'
import DragIconTable from './components/DragIconTable'

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
      <FetchTable loading={loading}></FetchTable>
      <SelectTable loading={loading}></SelectTable>
      <GroupTable loading={loading}></GroupTable>
      <NestedTable loading={loading}></NestedTable>
      <DragTable loading={loading}></DragTable>
      <DragIconTable loading={loading}></DragIconTable>
    </div>
  )
}
