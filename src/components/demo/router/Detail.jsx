import React, { Component } from 'react';
import qs from 'querystring';

// let obj = { name: 'tom', age: 19 };
// console.log(qs.stringify(obj));

// let str = 'name=tom&age=19';
// console.log(qs.parse(str));

class DetailDemo extends Component {
  state = {
    DetailsData: [
      { id: '01', content: '你好  中国' },
      { id: '02', content: '你好  江西' },
      { id: '03', content: '你好  鹰潭' },
    ],
  };
  render () {
    // console.log(
    //   this.props,
    //   '路由组件默认接受路由的3个参数histroy,location,match'
    // );
    // 1、params接收路由参数:
    // const { id, title22 } = this.props.match.params;
    // const findResult = this.state.DetailsData.find(i => i.id === id);

    // 2、search接收参数
    const { id, title22 } = qs.parse(this.props.location.search.slice(1));
    const findResult = this.state.DetailsData.find(i => i.id === id);

    // 3、state接收参数(优)
    // const { id, title22 } = this.props.location.state || {};
    // const findResult = this.state.DetailsData.find(i => i.id === id) || {};
    // console.log(id, findResult, 'findResult');

    return (
      <div>
        <h2>三级路由</h2>
        <ul>
          <li>ID:{id}</li>
          <li>TITLE:{title22}</li>
          <li>CONTENT:{findResult.content}</li>
        </ul>
      </div>
    );
  }
}

export default DetailDemo;
