import * as types from '../action-type'

/**
 * @param {提交dispatch传递的数据} data
 */
export const addTags = data => ({
  type: types.TAGS_LIST_ADD,
  data
})

export const deleteTags = data => ({
  type: types.TAGS_LIST_DELETE,
  data
})
