import React, { Component } from 'react';
import axios from 'axios';

class AxiosDemo extends Component {
  state = {}
  // 获取学生数据
  getStudentsData = () => {
    axios.get('/api1/students').then(
      response => { console.log(response, '请求成功了！'); },
      error => { console.log(error, '请求失败了！'); }
    );
  }
  // 获取汽车数据
  getCarsData = () => {
    axios.get('/api2/cars').then(
      response => { console.log(response, '请求成功了！'); },
      error => { console.log(error, '请求失败了！'); }
    );
  }
  // 搜索
  search = (e) => {

    const obj = { a: { b: { c: 1 } } };
    const { a: { b: { c } } } = obj;  // 连续解构赋值
    const { a: { b: { c: data } } } = obj;  // 连续解构赋值 && 重命名
    console.log(c, data);

    const { keyWordDone: { value: keyWord } } = this;
    console.log(this.keyWordDone.value, keyWord);

    // github后端用cos解决跨域了,不用前端做代理
    axios.get(`https://api.github.com/search/users?q=${keyWord}`).then(
      response => { console.log(response, '请求成功了！'); },
      error => { console.log(error, '请求失败了！'); }
    );

  };
  render () {
    return (
      <div>
        <hr />
        <h2>*****axios****</h2>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getCarsData}>获取汽车数据</button>
        <input ref={c => this.keyWordDone = c} type="text" placeholder='输入关键词点击搜索' />
        <button onClick={this.search}>搜索</button>
      </div>
    );
  }
}

export default AxiosDemo;