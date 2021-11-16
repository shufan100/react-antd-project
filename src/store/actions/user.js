import * as types from '../action-type';


//  action方法
// export const toggleSiderBar = ()=>{
//   return {
//     type: types.APP_TOGGLE_SIDEBAR
//   }
// };
// 简写1：
export const deleteItemAction = (data) => ({
  type: types.USER_DELETE_ITEM,
  data,
});
  