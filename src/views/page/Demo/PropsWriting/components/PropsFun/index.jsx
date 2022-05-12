import React, { forwardRef, useImperativeHandle } from 'react'
import PropTypes from 'prop-types';
function PropsFun (props, ref) {
  const { val, val2, val3, optionalNode } = props
  const { number, str, bool, undefineds, nulls, obj, arr, fun } = props
  // 
  // 
  useImperativeHandle(ref, () => ({
    clickFun (params, params1) {
      alert(`父组件 调用 fun子组件方法 ${params} - ${params1}`)
    },
    clickFun2
  }))

  const clickFun2 = (params, params1) => {
    alert(`父组件 调用 fun子组件方法 ${params} - ${params1}`)
  }

  const currClick = () => {
    alert('forwardRef渲染函数不支持propTypes或defaultProps,未传父组件方法，自身默认的方法')
  }

  return (
    <div >
      <h1>Props接参(函数式组件)</h1>
      <ul>
        <li><h3>{val === '值' ? '子组件接收的数据（传）' : '子组件接收的数据（未传）'}</h3></li>
        <li><h3 style={{ color: 'red', fontSize: '14px' }}>注：forwardRef渲染函数不支持propTypes或defaultProps</h3></li>
        <li>数据1：{val}</li>
        <li>数据2：{val2}</li>
        <li>数据3：{val3}</li>
        {/* <li>任何类型：{optionalNode[0].id}</li> */}
        <hr />

        <li>数&nbsp;&nbsp;&nbsp;字：{number}</li>
        <li>字符串：{str}</li>
        <li>布尔值：{bool ? 'true' : 'false'}</li>
        <li>未定义：{!undefineds ? 'undefined' : ''}</li>
        <li>null空：{!nulls ? 'null' : ''}</li>
        <li>对&nbsp;&nbsp;&nbsp;象：{obj ? `{ id：${obj.id}、title：${obj.title}} ` : 'forwardRef渲染函数不支持propTypes或defaultProps'}</li>
        <li>数&nbsp;&nbsp;&nbsp;组：{arr ? `[{ id：${arr[0].id}、title：${arr[0].name}}, { id：${arr[1].id}、title：${arr[1].name} }]` : 'forwardRef渲染函数不支持propTypes或defaultProps'}</li>
        <li>函&nbsp;&nbsp;&nbsp;数：<button onClick={() => fun ? fun('88888888') : currClick()}>父组件方法</button></li>
      </ul>
    </div >
  )
}

// props校验类型
PropsFun.propTypes = {
  val: PropTypes.string.isRequired, //必传
  val2: PropTypes.number,
  val3: PropTypes.string,
  // 
  number: PropTypes.number, //数字
  str: PropTypes.string, // 字符串
  bool: PropTypes.bool, // 布尔值
  // undefineds: PropTypes.undefined, //不支持
  // nulls: PropTypes.null,   //不支持
  obj: PropTypes.object, // 对象
  arr: PropTypes.array,//数组
  fun: PropTypes.func, //函数
  optionalNode: PropTypes.node //支持（数字、字符串、元素、数组、Fragment）
}
// props设置默认值  (不必传，未传，才会设置默认值)
PropsFun.defaultProps = {
  val2: 22,
  val3: '默认值',

  number: 1,
  str: '看看电视',
  bool: false,
  undefineds: undefined,
  nulls: null,
  obj: { id: '02', title: '大口' },
  arr: [
    { id: '77', name: '开裤' },
    { id: '88', name: '打架' }
  ],
  optionalNode: [{ id: '88' }],
  fun: (params) => { alert(`fun初始化函数：${params} `) }
};

// forwardRef渲染函数不支持propTypes或defaultProps
export default forwardRef(PropsFun)