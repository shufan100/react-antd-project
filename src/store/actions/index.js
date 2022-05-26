// action内的方法主要是用于封装，每个方法返回的都是一个对象，然后再由组件内的stroe.dispatch(acion对象（{type:'',data:null}）),而dispatch方法执行提交到reducers里
import { toggleSiderBar, toggleAsyncSiderBar, setCodeAction, setTitleAction } from './app'
import { setTokenAction, removeTokenAction, deleteItemAction, resetInputAction, editItemAction, checkAllItemAction, addAction, subAction, paddAction, addAsyncAction } from './user'
import { setCount, resetCount, setCountAsync } from './fun'
import { addTags, deleteTags } from './tags'
export {
  setTokenAction,
  removeTokenAction,
  toggleSiderBar,
  toggleAsyncSiderBar,
  setCodeAction,
  setTitleAction,
  deleteItemAction,
  resetInputAction,
  editItemAction,
  checkAllItemAction,
  addAction,
  subAction,
  paddAction,
  addAsyncAction,
  // fun模块
  setCount,
  resetCount,
  setCountAsync,
  // tags模块
  addTags,
  deleteTags
}
