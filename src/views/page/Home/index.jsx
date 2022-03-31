import React, { useState, useEffect } from 'react';
import { getUser1, getUser2, getCars } from '@/api';
import axios from 'axios';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();
export default function Home () {
  const [states, setStates] = useState({
    list: []
  });
  useEffect(() =>
    // console.log('组件已经挂载');
    () => {
      console.log('卸载组件前');
    }
    , []);

  const getDatas = async () => {
    const result = await axios.get('https://api.apiopen.top/getJoke');
    console.log(result);
  };
  const getNodeUser1 = async () => {
    const result = await getUser1(1);
    console.log(result);

  };
  const getNodeUser2 = async () => {
    const result = await getUser2();
    console.log(result);
  };
  const getNode2Cars = async () => {
    const result = await getCars();
    console.log(result);
  };

  // 解决回调地狱
  const getP = (e) => {
    getUser2().then(res => {
      console.log(res, 'getUser2');
      return getUser1(1);
    }).then(res => {
      console.log(res, 'getUser1');
      return getCars();
    }).then(res => {
      console.log(res, 'getCars');
    }).catch(err => {
      console.log(err, '捕获接口的错误');
    });
  };
  // 发起axios请求
  const getAxios = (e) => {
    axios.get(`/api1/search/users?q=${'1'}`, {
      cancelToken: source.token
    });
  };
  // 取消axios请求
  const cancelAxios = (e) => {
    source.cancel('取消请求');
  };
  return (
    <div>
      <div>首页页面</div>
      <button onClick={getDatas}>axios1</button>
      <button onClick={getNodeUser1}>node1--5000</button>
      <button onClick={getNodeUser2}>node2--5000</button>
      <button onClick={getNode2Cars}>node--5001</button>
      <button onClick={getP}>解决回调地狱</button>
      <br />
      <button onClick={getAxios}>发起axios请求</button>
      <button onClick={cancelAxios}>取消axios请求</button>
    </div>
  );
}
