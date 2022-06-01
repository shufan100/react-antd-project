import * as types from '../action-type'
import { $newSet } from '@/utils/util'

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
          taglist: $newSet([...preState.taglist, action.data], 'key')
        }
      }
    case types.TAGS_LIST_DELETE:
      console.log(preState.taglist.filter(item => item.key !== action.data.key))
      return {
        ...preState,
        taglist: [...preState.taglist.filter(item => item.key !== action.data.key)]
      }

    default:
      return preState
  }
}
