import React, { useState } from 'react'
import { Divider, Message } from 'antd'
import { useRequest } from 'ahooks'

export default function HooksWriting() {
  const [state, setState] = useState('')
  const [username, setUsername] = useState('')

  function editUsername(username) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (Math.random() > 0.5) {
          resolve()
        } else {
          reject(new Error('修改用户名失败'))
        }
      }, 1000)
    })
  }
  const { loading, runAsync } = useRequest(editUsername, {
    manual: true
  })
  const onClick = async () => {
    try {
      await runAsync(state)
      setState('')
      setUsername(state)
      Message.success(`用户名修改为 "${state}" !`)
    } catch (error) {
      Message.error(error.message)
    }
  }

  return (
    <div>
      <Divider>ahooks -- useRequest（runAsync）</Divider>
      <input onChange={e => setState(e.target.value)} value={state} placeholder='请输入用户名11' style={{ width: 240, marginRight: 16 }} />
      <button disabled={loading} type='button' onClick={onClick}>
        {loading ? 'Loading' : 'AsyncEdit'}
      </button>
      <div>用户名：{username}</div>
    </div>
  )
}
