import React, { Component } from 'react';
class JsxDemo extends Component {
  state = {
    isShow: true,
    list: ['Angular', 'React', 'Vue'],
  }

  // ------------------setState-------------------------------------
  setShow = () => {
    // 严重注意：state必须通过setState进行更新，且更新的动作好是合并
    this.setState({
      isShow: !this.state.isShow
    });
    // this.props.speak('子组件传的参数'); //props传入的函数
  }
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
          {
            list.map((i, index) => {
              let li = '';
              if (i !== 'Angular') {
                li = <li key={index}>{i}</li>;
              }
              return li;
            })
          }
        </ul>
      </div>
    );
  }
}

export default JsxDemo;