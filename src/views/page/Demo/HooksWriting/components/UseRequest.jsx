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
  const { loading, run } = useRequest(editUsername, {
    manual: true,

    onSuccess: (result, params) => {
      setState('')
      setUsername(params[0])
      console.log(result, params)
      Message.success(`用户名修改为 "${params[0]}" !`)
    },
    onError: error => {
      Message.error(error.message)
    }
  })

  return (
    <div>
      <Divider>ahooks -- useRequest（run）</Divider>
      <input onChange={e => setState(e.target.value)} value={state} placeholder='请输入用户名' style={{ width: 240, marginRight: 16 }} />
      <button disabled={loading} type='button' onClick={() => run(state)}>
        {loading ? 'Loading' : 'Edit'}
      </button>
      <div>用户名：{username}</div>
    </div>
  )
}
