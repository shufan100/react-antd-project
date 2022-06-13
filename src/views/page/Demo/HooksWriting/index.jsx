import React, { useEffect, useState } from 'react'
import { Divider } from 'antd'
import { getList } from '@/api'
import { useRequest } from 'ahooks'

import Debounce from './components/Debounce'
import UseRequest from './components/UseRequest'
import AsyncUseRequest from './components/AsyncUseRequest'

export default function HooksWriting() {
  const [val, setVal] = useState('')
  const [data, setData] = useState([])
  const [loading, setloading] = useState(false)

  const { run } = useRequest(data => getList(data), {
    manual: true,
    debounceWait: 1000,
    onSuccess: (result, params) => {
      console.log(result, params)
      setData(result.data)
      setloading(false)
    }
  })

  useEffect(() => {
    init()
  }, [])
  const init = () => {
    setloading(true)
    run()
  }

  const btnClick = e => {
    setloading(true)
    run({
      id: val,
      name: 'sf'
    })
  }

  return (
    <div>
      <Debounce />
      <UseRequest />
      <AsyncUseRequest />

      <Divider>ahooks -- useRequest（请求）</Divider>
      <input value={val} onChange={e => setVal(e.target.value)}></input>
      <button onClick={() => btnClick()}>请求</button>
      <button onClick={() => init()}>重置</button>
      <input onChange={e => run({ id: e.target.value })}></input>
      {loading ? (
        <h2>Loading......</h2>
      ) : data.length === 0 ? (
        <h2>暂无数据</h2>
      ) : (
        <ul>
          {data.map(i => (
            <li key={i.id}>
              {i.id} -- {i.text}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
