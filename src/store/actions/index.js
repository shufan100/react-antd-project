// action内的方法主要是用于封装，每个方法返回的都是一个对象，然后再由组件内的stroe.dispatch(acion对象（{type:'',data:null}）),而dispatch方法执行提交到reducers里
import { toggleSiderBar, setCodeAction, setTitleAction } from './app';
import { deleteItemAction, resetInputAction } from './user';
export {
  toggleSiderBar,
  setCodeAction,
  setTitleAction,
  deleteItemAction,
  resetInputAction, // 333步
};