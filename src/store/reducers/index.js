import { combineReducers } from 'redux';
import {app} from './app';
import {user} from './user';
// 999步
// combineReducers：创建store仓库
export default combineReducers({
  app,
  user
});