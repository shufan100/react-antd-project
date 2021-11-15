import reducers from './reducers';
import { createStore, applyMiddleware } from 'redux';
// 1、createStore这个函数，用来生成 Store
// 2、applyMiddleware使用reduxThunk中间件，包装 store 的 dispatch 方法来达到你想要的目的
import reduxThunk from 'redux-thunk';
// reduxThunk是redux中间件，对store对dispatch方法做一个升级，以前dispatch只接收一个对象，升级后可以接收函数


const store =  createStore(reducers,applyMiddleware(reduxThunk));

export default store;

// redux最终导出
  // 1、生成stroe  createStore(reducers)
  // 2、使用中间件自定义stroe的dispatch方法  createStore(reducers,applyMiddleware(reduxThunk))
  // 在app.js最外层用Provider包裹，使所有的组件都可以使用store
  
