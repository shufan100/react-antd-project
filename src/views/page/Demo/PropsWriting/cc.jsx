import React, { forwardRef, useImperativeHandle } from 'react'

const ChildCom = (props, ref) => {
  // 将子组件的方法暴露出去，让父级通过ref能获取到里面的方法
  useImperativeHandle(ref, () => ({
    getData
  }))
  const getData = () => {
    alert(666)
  }
  return (
    <div>⼦组件</div>
  )
}
// forwardRef渲染函数不支持propTypes或defaultProps
export default forwardRef(ChildCom)
