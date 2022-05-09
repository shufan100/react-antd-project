import * as types from '../action-type';

// 创建action动作对象
// action：1,配置方法的type,2,接收参数
export const setTokenAction = (data) => ({
  type: types.USER_SET_TOKEN,
  data
});
export const removeTokenAction = () => ({
  type: types.USER_REMOVE_TOKEN
});

export const resetInputAction = (value) => ({
  type: types.USER_SET_INPUTCHANGE,
  value
});

// 简写1：
export const deleteItemAction = (index) => ({
  type: types.USER_DELETE_ITEM,
  index
});
export const editItemAction = (data) => ({
  type: types.USER_EDIT_ITEM,
  data
});
export const checkAllItemAction = (value) => ({
  type: types.USER_CHENCKALL_ITEM,
  value
});

// 求和
export const addAction = (value) => ({
  type: types.USER_COUNT_ADD,
  value
});
export const subAction = (value) => ({
  type: types.USER_COUNT_SUB,
  value
});
export const paddAction = (value) => ({
  type: types.USER_COUNT_PADD,
  value
});
// 异步aciton：意思就是延迟加
export const addAsyncAction = (time, value) =>
  (dispatch) => {
    setTimeout(() => {
      // store.dispatch(addAction());
      dispatch(addAction(value));
    }, time);
  }
  ;