import React from 'react'
import { useHistory, useLocation } from 'react-router-dom';
import qs from 'querystring'


function Search () {
  const history = useHistory()
  const location = useLocation()
  console.log(location.search, 'Search')
  const search = qs.parse(location.search.slice(1));
  console.log(search)


  const back = () => {
    if (history.action === 'POP' || history.action === 'REPLACE') {
      history.replace('/demo/routeWriting')
    } else {
      history.goBack()
    }
  }

  return (
    <div>
      <h1>接收Search路由参数</h1>
      <button onClick={() => back()}>返回</button> <br /> &nbsp;
      <div>接收的Search参数: ( id：<span style={{ color: 'red' }} > {search.id}</span> | title：<span style={{ color: 'red' }}>{search.title22}</span> )</div>

    </div>
  )
}
export default Search