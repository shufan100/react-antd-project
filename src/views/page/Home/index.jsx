import React, { useState } from 'react'

import HomeHead from './components/HomeHead'
import HomeContent from './components/HomeContent'
import HomeButtom from './components/HomeButtom'
const homeStyle = {
  padding: 0,
  background: '#f0f2f5'
}
export default function Home() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1500)

  return (
    <div id='home' style={homeStyle}>
      <HomeHead loading={loading} />
      <HomeContent loading={loading} />
      <HomeButtom loading={loading} />
    </div>
  )
}
