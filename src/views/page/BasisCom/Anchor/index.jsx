import React, { useState, useEffect } from 'react'
import { Anchor } from 'antd'
const { Link } = Anchor

const Anchors = () => {
  const [targetOffset, setTargetOffset] = useState(undefined)
  useEffect(() => {
    setTargetOffset(window.innerHeight / 2)
  }, [])
  return (
    <div>
      <Anchor targetOffset={targetOffset}>
        <Link href='#home' title='Basic demo' />
        <Link href='#k10' title='Static demo' />
        {/* <Link href='#components-anchor-demo-basic' title='Basic demo' />
      <Link href='#components-anchor-demo-static' title='Static demo' />
      <Link href='#API' title='API'>
        <Link href='#Anchor-Props' title='Anchor Props' />
        <Link href='#Link-Props' title='Link Props' />
      </Link> */}
      </Anchor>
      {new Array(100).fill(null).map((_, index) => (
        <div className={`k${index}`} id={`k${index + 1}`} key={index}>
          1111111
        </div>
      ))}
    </div>
  )
}

export default Anchors
