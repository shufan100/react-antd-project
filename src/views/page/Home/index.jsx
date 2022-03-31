import React, { useState, useEffect } from 'react';

export default function Home () {
  const [states, setStates] = useState({});
  useEffect(() =>
    // console.log('组件已经挂载');
    () => {
      console.log('卸载组件前');
    }
    , []);
  return (
    <div>
      <div>首页页面</div>
    </div>
  );
}
