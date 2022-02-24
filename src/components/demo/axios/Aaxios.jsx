import React, { Component } from 'react';
import axios from 'axios';
import PubSub from 'pubsub-js';

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
  search = async (type) => {
    console.log(type);
    // const obj = { a: { b: { c: 1 } } };
    // const { a: { b: { c } } } = obj;  // 连续解构赋值
    // const { a: { b: { c: data } } } = obj;  // 连续解构赋值 && 重命名
    // console.log(c, data);

    const { keyWordDone: { value: keyWord } } = this;
    // console.log(this.keyWordDone.value, keyWord);

    // 消息订阅发送
    PubSub.publish('Aaxios', { name: 'tom', age: 18, list: [], loading: true });

    // github后端用cos解决跨域了,不用前端做代理
    const url = type === 'success' ? 'users' : 'users11';
    // axios.get(`https://api.github.com/search/${url}?q=${keyWord}`).then(
    //   response => {
    //     console.log(response, '请求成功了！');
    //     PubSub.publish('Aaxios', { name: 'tom', age: 18, list: response.data.items, loading: false, err: '' });
    //   },
    //   error => {
    //     console.log(error, '请求失败了！');
    //     PubSub.publish('Aaxios', { name: 'tom', age: 18, list: [], loading: false, err: error.message });
    //   }
    // );

    // fetch 未优化
    // fetch(`https://api.github.com/search/${url}?q=${keyWord}`).then(
    //   // 这个里面返回的不是promise就会再走第二个then
    //   response => {
    //     console.log(response, '联系服务器成功！');
    //     return response.json();
    //   },
    //   // error => {
    //   //   console.log(error, '联系服务器失败了！'); //其实是有返回值，返回值是undefined
    //   //   return new Promise(() => { });  // 中断promise链，返回一个新的promise实例就不会往下走了
    //   // }
    // ).then(
    //   response => { console.log(response, '获取数据成功了222！'); },
    //   // error => { console.log(error, '获取数据失败222！'); },
    // ).catch(
    //   error => { console.log(error); }
    // );

    // fetch 优化  try成功返回， catch失败返回，会带错误回调
    try {
      const response = await fetch(`https://api.github.com/search/${url}?q=${keyWord}`);
      const data = await response.json();
      console.log('请求成功', data);
      PubSub.publish('Aaxios', { name: 'tom', age: 18, list: response.data.items, loading: false, err: '' });

    } catch (error) {
      console.log('请求出错', error);
      PubSub.publish('Aaxios', { name: 'tom', age: 18, list: [], loading: false, err: error.message });
    }


  };


  render () {
    return (
      <div>
        <hr />
        <h2>*****A-axios(消息订阅发送)****</h2>
        <button onClick={this.getStudentsData}>获取学生数据</button>
        <button onClick={this.getCarsData}>获取汽车数据</button><br />
        <br />
        <input ref={c => this.keyWordDone = c} type="text" placeholder='输入关键词点击搜索' />
        <button onClick={() => this.search('success')}>成功搜索</button>
        <button onClick={() => this.search('error')}>失败搜索</button>
      </div>
    );
  }
}

export default AxiosDemo;