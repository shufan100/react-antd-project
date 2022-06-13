import React, { useState } from 'react'
import { Divider } from 'antd'
import UseDebounce from '@/Hooks/useDebounce.js'

export default function HooksWriting() {
  const [text, setText] = useState('Hello')

  const inputchange = UseDebounce(val => {
    console.log(val)
    setText(val)
  }, 1000)

  return (
    <div>
      <Divider>防抖</Divider>
      <input defaultValue={'Hello'} onChange={e => inputchange(e.target.value)} />
      <p>Value: {text}</p>
    </div>
  )
}
