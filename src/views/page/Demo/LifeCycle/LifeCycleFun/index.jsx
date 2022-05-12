import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom';
import effectImg from '@/assets/images/Effect.png'

const LifeCycleFun = () => {
  const [states, setStates] = useState({
    title: '',
    count: 0
  })
  const [num, setNum] = useState(10)
  const [opacity, setOpacity] = useState(1)
  const [colors, setColor] = useState('red')
  const [date, setDate] = useState('')

  // 初始化
  useEffect(() => {
    console.log('组件挂载完毕')
    const data = { ...states }
    data.title = '生命周期(函数)'
    setStates(data)
    return () => {
      console.log('组件卸载之前')
    }
  }, [])
  // 渐变
  let timer1;
  useEffect(() => {
    timer1 = setInterval(() => {
      setOpacity(opacity - 0.1)
      if (opacity < 0.8) setColor('#000')
      if (opacity < 0.1) {
        setOpacity(1)
        setColor('red')
      }
    }, 200);
    return () => clearInterval(timer1);
  }, [opacity])
  // 时间
  useEffect(() => {
    let timer = setInterval(() => {
      let date = new Date()
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = date.getDate()
      const hh = date.getHours()
      const mm = date.getMinutes()
      const ss = date.getSeconds()
      let str = `${y}-${m}-${d} ${hh}:${mm}:${ss}`
      console.log(str)
      setDate(str)
    }, 1000);
    return () => clearInterval(timer);
  }, [date])
  //卸载组件
  const unMount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  }



  // -------------------------------------------------------------
  //计算
  const add = (e, type) => {
    let data = { ...states }
    if (type === '+') {
      data.count++
    } else {
      data.count--
      if (data.count < 0) data.count = 0
    }
    setStates(data)

  };
  // 清除计时器
  const clear = (e) => {
    clearInterval(timer1)
  };

  return (
    <div>
      <h1>{states.title}</h1>
      <span>计算：{states.count}</span> &nbsp;
      <button onClick={e => add(e, '+')}>加</button>&nbsp;&nbsp;
      <button onClick={e => add(e, '-')}>减</button> &nbsp;&nbsp;
      <button onClick={e => setNum(num / 2)}>{num}</button>&nbsp;&nbsp;
      <button onClick={() => unMount()}>卸载组件</button><br /> &nbsp;


      <div>
        <h3>初始化、更新、卸载前：</h3>
        <img src={effectImg} alt="" />
      </div>&nbsp;

      <div>
        <h3>Demo</h3>
        <span style={{ opacity: opacity, color: colors }}>DEMODEMODEMODEMODEMODEMODEMO</span>
        <button onClick={() => clear()}>暂停渐变</button>
        <span>时间：{date}</span>
      </div>
    </div >
  )
}
export default LifeCycleFun;
