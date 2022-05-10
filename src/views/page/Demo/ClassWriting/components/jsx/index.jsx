import React, { Component } from 'react';
import HasErrorDemo from './hasError';
class JsxDemo extends Component {
  state = {
    isShow: true,
    list: ['Angular', 'React', 'Vue'],
    hasError: null
  };

  // 错误边界：生命周期函数，一旦后代组件发生错误就会触发(只是用生产环境)
  static getDerivedStateFromError (error) {
    return { hasError: error };
  }
  componentDidCatch () {
    console.log('统计页面错误，发送请求给后台');
  }

  // ------------------setState-------------------------------------
  setShow = () => {
    // 严重注意：state必须通过setState进行更新，且更新的动作好是合并
    this.setState({
      isShow: !this.state.isShow
    });
    // this.props.speak('子组件传的参数'); //props传入的函数
  };
  render () {
    const { isShow, list } = this.state;
    return (
      <div>
        <hr />
        <h2>*****Jsx写法*****</h2>
        {/************  jsx结构内只能写表达式 、或者有返回值得语句（代码）***************/}

        {/************************* 三元表达式 *****************************************************************/}
        {isShow ? <span>控制功能块现实隐藏</span> : ''}
        <button onClick={this.setShow}>显示/隐藏</button>

        {/************************* for循环 / if判断  *****************************************************************/}
        <ul>
          {list.map((i, index) =>
            i !== 'Angular' ? <li key={index}>{i}</li> : ''
          )}
        </ul>
        {/************************* 子组件错误提示  *****************************************************************/}
        {this.state.hasError ? <h2 style={{ color: 'red' }}>当前网络不稳定，稍后再试！</h2> : <HasErrorDemo />}
      </div>
    );
  }
}

export default JsxDemo;
