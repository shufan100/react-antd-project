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
  render () {
    return (
      <div>
        <hr />
        <h2>*****axios****</h2>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getCarsData}>获取汽车数据</button>
      </div>
    );
  }
}

export default AxiosDemo;