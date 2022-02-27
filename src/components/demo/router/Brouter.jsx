import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import DetailDemo from './Detail';

export default class Brouter extends Component {
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  };
  render() {
    const { messageArr } = this.state;
    return (
      <div>
        <h2>二集路由 -- Brouter.......</h2>
        <ul>
          {messageArr.map(i => (
            <li key={i.id}>
              {/* 向路由组件传params参数 */}
              {/* <Link to={`/home/brouter/detail/${i.id}/${i.title}`}>{i.title}</Link> */}

              {/* 向路由组件传search参数 */}
              <Link to={`/home/brouter/detail?id=${i.id}&title22=${i.title}`}>
                {i.title}
              </Link>
            </li>
          ))}
        </ul>
        <hr />
        {/* 注册路由,声明接收parpms参数 */}
        {/* <Route path="/home/brouter/detail/:id/:title22" component={DetailDemo}/> */}

        {/* 注册路由,接收serach参数无需写 */}
        <Route path="/home/brouter/detail" component={DetailDemo} />
      </div>
    );
  }
}
