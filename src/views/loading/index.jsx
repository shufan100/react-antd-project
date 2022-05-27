import React, { Component } from 'react'
import './index.less'

export default class Loading extends Component {
  render() {
    return (
      <div class='app-loading'>
        <div class='app-loading-wrap'>
          <div class='app-loading-dots'>
            <span class='dot dot-spin'>
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
          </div>
        </div>
      </div>
    )
  }
}
