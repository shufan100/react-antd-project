import React, { useState, useEffect } from 'react';
import { getUser1, getUser2, getCars } from '@/api';
import axios from 'axios';
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
  return (
    <div>
      <div>首页页面</div>
      <button onClick={getDatas}>axios1</button>
      <button onClick={getNodeUser1}>node1--5000</button>
      <button onClick={getNodeUser2}>node2--5000</button>
      <button onClick={getNode2Cars}>node--5001</button>
    </div>
  );
}
