import React, { forwardRef, useImperativeHandle } from 'react'

const ChildCom = (props, ref) => {
  useImperativeHandle(ref, () => ({
    getData
  }))
  const getData = () => {
    // to do something
    alert(666)
  }
  return (
    <div>⼦组件</div>
  )
}

export default forwardRef(ChildCom)
