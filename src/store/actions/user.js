import * as types from '../action-type';



//  action方法
// export const toggleSiderBar = ()=>{
//   return {
//     type: types.APP_TOGGLE_SIDEBAR
//   }
// };

// 222步
export const resetInputAction = (value) => ({
  type: types.USER_SET_INPUTCHANGE,
  value
});

// 简写1：
export const deleteItemAction = (index) => ({
  type: types.USER_DELETE_ITEM,
  index,
});
export const editItemAction = (data) => ({
  type: types.USER_EDIT_ITEM,
  data,
});
export const checkAllItemAction = (value) => ({
  type: types.USER_CHENCKALL_ITEM,
  value,
});
