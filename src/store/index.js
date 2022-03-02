
/** 该文件专门用于暴露一个store对象，整个项目只有一个store对象** */

import { createStore, applyMiddleware } from 'redux';
// 1、createStore：创建redux中最为核心的store对象
// 2、applyMiddleware使用reduxThunk中间件，包装 store 的 dispatch 方法来达到你想要的目的

import reduxThunk from 'redux-thunk';
// reduxThunk是redux中间件，对store的dispatch方法做一个升级(用于支持异步action,以前dispatch只接收一个对象，升级后可以接收函数)

import reducers from './reducers';

// 
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(reducers, composeWithDevTools(applyMiddleware(reduxThunk)));
// 暴露store
export default store;


