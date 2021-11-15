import { combineReducers } from 'redux';
import {app} from './app';
import {user} from './user';

// combineReducers：创建store仓库
export default combineReducers({
  app,
  user
});