import React, { useState } from 'react'
import './index.less'

import HomeHead from './components/HomeHead'
import HomeContent from './components/HomeContent'
import HomeButtom from './components/HomeButtom'

export default function Home() {
  const [loading, setLoading] = useState(true)
  setTimeout(() => {
    setLoading(false)
  }, 1500)
  return (
    <div id='home'>
      <HomeHead loading={loading} />
      <HomeContent loading={loading} />
      <HomeButtom loading={loading} />
    </div>
  )
}
