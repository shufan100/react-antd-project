import { combineReducers } from 'redux';
import { app } from './app';
import { user } from './user';

// combineReducers(坑白瑞丢死)：汇总所有的reducer变成一个reducer
export default combineReducers({
  app,
  user
});