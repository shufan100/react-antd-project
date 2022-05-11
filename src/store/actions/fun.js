import * as types from '../action-type'

/**
 * @param {提交dispatch传递的数据} data 
 */
export const setCount = data => ({
  type: types.FUN_COUNT_ADD,
  data
})

export const resetCount = data => ({
  type: types.FUN_COUNT_RESET,
  data
})

// 异步action (不是必须使用的)
export const setCountAsync = data => dispatch => {
  // let timer;
  const p = new Promise((resolve, reject) => {
    let timer = setTimeout(() => {
      clearTimeout(timer)
      resolve()
    }, 1000);
  })
  p.then(res => {
    console.log('resolve')
    dispatch(setCount(data))
  }, err => {
    console.error('reject')
  })
}