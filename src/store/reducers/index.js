import { combineReducers } from 'redux'
import app from './app'
import user from './user'
import fun from './fun'
import tags from './tags'

// combineReducers(坑白瑞丢死)：把所有的reducers汇总成一个reducer
export default combineReducers({
  app,
  user,
  fun,
  tags
})
