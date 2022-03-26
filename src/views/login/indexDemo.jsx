import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
class Login extends Component {
  state = {
    username: '',
    password: ''
  }


  saveSerChange = (event) => {
    // console.log(event.target.value);
    this.setState({ username: event.target.value });
  }
  savePassword = (event) => {
    // console.log(event.target.value);
    this.setState({ password: event.target.value });
  }
  handleSubmit = (event) => {
    event.preventDefault();  // 阻止表单提交
    // const { username, password } = this;
    // console.log(username.value, password.value);
    const { username, password } = this.state;
    console.log(username, password);
  }

  // 通用方法 (柯里化函数编程)
  saveFormData = (dataType) => {
    console.log(dataType);
    // 这个函数的返回值是函数,是react调用的，react调用的函数才能接收到event
    return (event) => {
      console.log(dataType, event.target.value);
      // [datatype]  ==== let a = 'name'; let obj = {}; obj[a] = '1111'
      this.setState({ [dataType]: event.target.value });

    };
  }
  // 柯里化函数
  // sum = (a) => {
  //   return (b)=>{
  //     return (c) =>{
  //       return a + b +c
  //     }
  //   }
  // }
  sum = (a) => (b) => (c) => a + b + c

  saveFormData2 = (event, dataType) => {
    console.log(event.target.value, dataType);
    this.setState({ [dataType]: event.target.value });
  }

  render () {
    // console.log(this);
    const { token } = this.props;
    console.log(111111, '---');
    if (token) {
      return <Redirect to="/home" />;
    }
    return (
      <div>
        {/* <form action='http://baidu.com' onSubmit={this.handleSubmit}> */}
        {/* 有把值存到state里就是受控组件，没存就是非受控组件 */}
        {/* 受控组件，是输入组件将值存在状态里，然后点击登录的时候再从状态里取，这其实就是实现了vue的双向数据绑定 */}
        <form onSubmit={this.handleSubmit}>
          {/* 用户名：<input ref={c => this.username = c} onChange={this.saveSerChange} type="text" name='username' />
          密码：<input ref={c => this.password = c} onChange={this.savePassword} type="password" name='password' /> */}

          {/* 柯里化函数简写 */} {/* 加括号是把函数的返回值返回，需要返回函数才行，返回的函数接收的参数就是react调用的节点evenet */}
          {/* 用户名2：<input onChange={this.saveFormData('username')} type="text" name='username' />
          密码2：<input onChange={this.saveFormData('password')} type="password" name='password' /> */}

          {/* 不使用柯里化函数简写 */}
          用户名3：<input onChange={event => this.saveFormData2(event, 'username')} type="text" name='username' />
          密码3：<input onChange={event => this.saveFormData2(event, 'password')} type="password" name='password' />


          <button>登录 {this.sum(1)(2)(3)}</button>
        </form>
      </div>

    );
  }
}

export default connect(state => state.user)(Login);
