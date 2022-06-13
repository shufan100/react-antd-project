import React, { Component } from 'react'
import { Spin } from 'antd'
import './index.less'

export default class Loading extends Component {
  render() {
    return (
      <div className='app-loading'>
        {/* <div className='app-loading-wrap'>
          <div className='app-loading-dots'>
            <span className='dot dot-spin'>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div> */}
        <Spin size='large' />
      </div>
    )
  }
}
