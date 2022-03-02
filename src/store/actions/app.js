import * as types from '../action-type';
// import store from '../index';


//  同步action方法,就是指action的值为Object类型的一般对象
export const toggleSiderBar = () => ({
  type: types.APP_TOGGLE_SIDEBAR
});
export const setCodeAction = () => ({
  type: types.APP_SET_CODE
});
export const setTitleAction = (titleVal) => ({
  type: types.APP_SET_TITLE,
});

//  异步action方法，就是指action的值为函数
export const toggleAsyncSiderBar = (time) =>
  (dispatch) => {
    setTimeout(() => {
      // store.dispatch(toggleSiderBar());
      dispatch(toggleSiderBar());
    }, time);
  };