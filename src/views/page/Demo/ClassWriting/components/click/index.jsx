import React, { Component } from 'react';
import { connect } from 'react-redux';


class ClickDemo extends Component {
  state = {}
  // ------------------click写法传参-------------------------------------
  demo () {
    console.log('按钮1', this);
  }
  demo1 = () => {
    console.log('按钮2', this);

  }
  demo2 = (param) => {
    console.log('按钮3', param, this);

  }
  render () {
    return (
      <div>
        <hr />
        <h2>*****Click写法****</h2>
        {/* 
          <button onClick={this.demo}>按钮1</button> 
          1、demo方法放在哪里?  —— LayoutContent的原型对象上，供实例使用
          2、由于demo是作为onClick的回调，所有不是通过实例调用的，是直接调用
          3、类中的方法默认开启局部的严格模式，所以demo方法的this为undefined
          4、事件不能采用 return false 的方式来阻止浏览器的默认行为，而必须要地明确地调用preventDefault()来阻止默认行为
        */}
        <button onClick={this.demo.bind(this)}>按钮1</button>
        <button onClick={this.demo1}>按钮2</button>
        <button onClick={() => this.demo2('参数')}>按钮3</button>
      </div>
    );
  }
}

export default connect(state => state.user)(ClickDemo);