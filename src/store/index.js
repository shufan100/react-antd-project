
//** 该文件专门用于暴露一个store对象，整个项目只有一个store对象**

import { createStore, applyMiddleware } from 'redux';
// 1、createStore：创建redux中最为核心的store对象
// 2、applyMiddleware使用reduxThunk中间件，包装 store 的 dispatch 方法来达到你想要的目的

import reduxThunk from 'redux-thunk';
// reduxThunk是redux中间件，对store对dispatch方法做一个升级，用于支持异步action,以前dispatch只接收一个对象，升级后可以接收函数

import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(reduxThunk));
// 暴露store
export default store;

// redux最终导出
  // 1、生成stroe  createStore(reducers)
  // 2、使用中间件自定义stroe的dispatch方法  createStore(reducers,applyMiddleware(reduxThunk))
  // 在app.js最外层用Provider包裹，使所有的组件都可以使用store

