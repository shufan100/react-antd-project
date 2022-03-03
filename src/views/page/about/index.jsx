import React, { Fragment, useState, useEffect, useRef, useReducer } from 'react';
import ReactDOM from 'react-dom';
import { withRouter, useHistory } from 'react-router-dom';
import store from '@/store';
import { addAction } from '@/store/actions';
import { user } from '@/store/reducers/user';
import ChildAbout from './childAbout';
import ChildAbout2 from './childAbout2';
import './index.less';
import { AppContext } from './context.js';

// -------------------------------useContext共享状态钩子-------------------------------------------------------------------------------------------------
// const AppContext = React.createContext({});

const About = props => {
  console.log(props, '路由的三大属性');
  const aboutName = 'Tom';

  // -------------------------------useState状态钩子-------------------------------------------------------------------------------------------------
  // useState：返回一个数组，第一项变量初始值，第二项是函数
  const [count, setCount] = useState(10);
  const [bool, setBool] = useState(false);
  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    setCount(count - 1); //第一种写法
  };
  const isShow = (e) => {
    setBool(!bool);
  };

  // -------------------------------useEffect副作用钩子/模拟生命周期钩子-------------------------------------------------------------------------------------------------
  /**useEffect
   * 1、[]不写：就会监测所有人，dom渲染完、数据更新触发，(和类组件生命周期一样：componentDidMount，componentDidUpdate)
   * 2、[]写了：数据改变不监测，dom渲染完触发, (和类组件生命周期一样：componentDidMount)
   * 3、[count,...]写了：监测count状态，dom渲染完触发,count等更新触发，(和类组件生命周期一样：componentDidMount，componentDidUpdate)
   * 4、返回一个函数：相当于componentWillUnmount生命周期，卸载组件前调用
  */
  useEffect(() => {
    console.log('@');
    let timer = setInterval(() => {
      // setCount(count => count + 1); //需要使用函数式得写法
    }, 1000);
    return () => { // 返回一个函数，相当于componentWillUnmount生命周期
      console.log('卸载组件前');
      clearInterval(timer);
    };
  }, []);
  const onMount = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
  };

  // -------------------------------useRef-------------------------------------------------------------------------------------------------
  const inputRef = useRef();
  const showData = () => {
    console.log(inputRef.current.value, 'inputRef');
    setCount(inputRef.current.value * 1);
  };

  // -------------------------------useReducer-------------------------------------------------------------------------------------------------
  // 它接受reducer函数和状态的初始值作为参数，返回一个数组，其中第一项为当前的状态值，第二项为发送action的dispatch函数
  let initState = { ...store.getState().app, ...store.getState().user };
  const [state, dispatch] = useReducer(user, initState);

  const setCountRedux = (value) => {
    // store.dispatch(addAction(value)); // 原生的
    dispatch(addAction(value)); // useReducer的
  };



  // -------------------------------useHistory:路由导航钩子-------------------------------------------------------------------------------------------------
  const history = useHistory();
  const goHome = () => {
    history.push('/home');
  };


  return (
    <div>
      <h1 style={{ textAlign: 'center', padding: '20px' }}>函数式组件--Hooks</h1>

      <hr />
      <h1 style={{ color: 'red', padding: '20px 100px' }}>**useState状态钩子**</h1>
      <h4>当前求和为{count}</h4>
      <button onClick={add}>+1</button><button onClick={sub}>-1</button>

      <hr />
      <h1 style={{ color: 'red', padding: '20px 100px' }}>**useEffect副作用钩子/模拟生命周期钩子**</h1>
      {
        bool ? <h4 style={{ color: 'red' }}>显示得文字</h4> : ''
      }
      <button onClick={isShow}>显示/隐藏</button>
      <button onClick={onMount}>卸载组件</button>


      <hr />
      <h1 style={{ color: 'red', padding: '20px 100px' }}>**useRef**</h1>
      <input type="text" ref={inputRef} />
      <button onClick={showData}>点击提示数据</button>

      <hr />
      <h1 style={{ color: 'red', padding: '20px 100px' }}>**useReducer:Action钩子**</h1>
      <h4>redux值：{state.count}</h4>
      <button onClick={() => setCountRedux(1)}>函数式Redux +1</button>

      <hr />
      <h1 style={{ color: 'red', padding: '20px 100px' }}>**useHistory:路由导航钩子**</h1>
      <button onClick={goHome}>跳回首页</button>

      <hr />
      <h1 style={{ color: 'red', padding: '20px 100px' }}>**useContext():共享状态钩子**</h1>
      {/* 避免了react逐层通过Props传递数据 */}
      <div className='parent'>
        <h1 style={{ color: 'red', fontWeight: 'bold' }}>--A父组件--</h1>
        <h2>我的用户名：{aboutName}</h2>
        <AppContext.Provider value={{ aboutName: aboutName, hookVal: 'hook测试', hookName: 'About' }}>
          <ChildAbout name={'啊水水水水'} />
          <br />
          <ChildAbout2 name={'啊水水水水'} />
        </AppContext.Provider>
      </div>
    </div>
  );
};

// 加工函数式组件：给组件添加路由的3大属性：history、loaction、match
export default withRouter(About);




