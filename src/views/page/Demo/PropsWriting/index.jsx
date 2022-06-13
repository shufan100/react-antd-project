import React, { useState, useRef } from 'react'
import PropsClass from './components/PropsClass'
import PropsFun from './components/PropsFun'

// import Cc from './cc'

function PropsWriting() {
  const [number] = useState(987)
  const [str] = useState('生生世世')
  const [bool] = useState(true)
  const [undefineds] = useState(undefined)
  const [nulls] = useState(null)
  const [obj] = useState({
    id: '01',
    title: '熊'
  })
  const [arr] = useState([
    { id: '11', name: '习俗' },
    { id: '22', name: '车型' }
  ])
  const fun = params => {
    alert(`父组件方法：${params}`)
  }

  // 调用calss子组件方法
  const PropsClassRef = useRef()
  const getClassClick = e => {
    PropsClassRef.current.clickClass(1, 2) // 调用子组件方法
    console.log(PropsClassRef.current)
  }

  // 调用函数子组件方法
  const FunRef = useRef()
  const getFunClick = e => {
    FunRef.current.clickFun(111, 2222)
    console.log(FunRef.current)
  }

  return (
    <div>
      <h1>Props传参</h1>
      <ul>
        <li>
          <h3>父组件数据</h3>
        </li>
        <li>数&nbsp;&nbsp;&nbsp;字：{number}</li>
        <li>字符串：{str}</li>
        <li>布尔值：{bool ? 'true' : 'false'}</li>
        <li>未定义：{!undefineds ? 'undefined' : ''}</li>
        <li>null空：{!nulls ? 'null' : ''}</li>
        <li>对&nbsp;&nbsp;&nbsp;象：{`{id：${obj.id}、title：${obj.title}}`}</li>
        <li>数&nbsp;&nbsp;&nbsp;组：{`[{id：${arr[0].id}、title：${arr[0].name}}, {id：${arr[1].id}、title：${arr[1].name}}]`}</li>
        <li>
          函&nbsp;&nbsp;&nbsp;数：<button onClick={() => fun(888)}>click</button>
        </li>

        <li>
          调用class子组件方法：<button onClick={() => getClassClick()}>classClick</button>
        </li>
        <li>
          调用fun子组件方法：<button onClick={() => getFunClick()}>funClick</button>
        </li>
      </ul>
      <div className='flex'>
        <PropsClass val='值' number={number} str={str} obj={obj} arr={arr} fun={fun} optionalNode={arr} />
        <PropsClass ref={PropsClassRef} val='calss组件' />

        <PropsFun val='值' number={number} str={str} obj={obj} arr={arr} fun={fun} optionalNode={arr} />
        <PropsFun ref={FunRef} />
      </div>

      {/* <Cc ref={FunRef} /> */}
    </div>
  )
}
export default PropsWriting
