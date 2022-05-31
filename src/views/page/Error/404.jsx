import React from 'react'
import { Button, Result } from 'antd'

const NotFound = props => {
  const { history } = props
  const goHome = () => history.replace('/home')
  const style = {
    paddingTop: 160
  }
  return (
    <Result
      status='404'
      title='404'
      subTitle='Sorry, the page you visited does not exist.'
      style={style}
      extra={
        <Button type='primary' onClick={goHome}>
          回到首页
        </Button>
      }
    />
  )
}

export default NotFound
