
import * as types from '../action-type'

const initState = {
  title: 'Redux',
  count: 100
}
/**
 * Reducer里只能接受state，不能改变state,要返回新的对象
 * @param {默认赋值初始化initState的值，(可以理解为就是上面的initState的值)，将action传进来的值给旧数据的值做处理} preState 
 * @param {接受两个值，一个type,一个data} action 
 * 
 */

export default function fun (preState = initState, action) {
  switch (action.type) {

    case types.FUN_COUNT_ADD:
      return {
        ...preState,
        count: preState.count + action.data * 1
      }

    case types.FUN_COUNT_RESET:
      console.log(initState)
      return {
        ...preState,
        count: 100
      }

    default:
      return preState
  }
}