import * as types from '../action-type'

const initState = {
  taglist: []
}

export default function tags(preState = initState, action) {
  switch (action.type) {
    case types.TAGS_LIST_ADD:
      if (preState.taglist.includes(action.data)) {
        return preState
      } else {
        return {
          ...preState,
          taglist: [...preState.taglist, action.data]
        }
      }
    case types.TAGS_LIST_DELETE:
      return {
        ...preState,
        count: [...preState.taglist.filter(item => item !== action.data)]
      }

    default:
      return preState
  }
}
