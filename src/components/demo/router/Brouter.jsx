import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import DetailDemo from './Detail';

export default class Brouter extends Component {
  // 路由组件props默认接收3个属性：history、location、match
  state = {
    messageArr: [
      { id: '01', title: '消息1' },
      { id: '02', title: '消息2' },
      { id: '03', title: '消息3' },
    ],
  };
  // push
  pushShow = (id, title) => {
    // 1、编程式路由：params传参
    // this.props.history.push(`/demo/contentDemo/brouter/detail/${id}/${title}`);

    // 2、编程式路由：search传参
    this.props.history.push(`/demo/contentDemo/brouter/detail?id=${id}&title22=${title}`);

    // 3、编程式路由：state传参
    // this.props.history.push('/demo/contentDemo/brouter/detail', { id: id, title22: title });
  }

  // replace
  repalceShow = (id, title) => {
    // 1、编程式路由：params传参
    // this.props.history.replace(`/demo/contentDemo/brouter/detail/${id}/${title}`);

    // 2、编程式路由：search传参
    this.props.history.replace(`/demo/contentDemo/brouter/detail?id=${id}&title22=${title}`);

    // 3、编程式路由：state传参
    // this.props.history.replace('/demo/contentDemo/brouter/detail', { id: id, title22: title });
  }
  // 后退
  back = () => {
    this.props.history.goBack();
  }
  // 前进
  forward = () => {
    this.props.history.goForward();
  }
  // go （2前进2步，-2回退2步）
  go = () => {
    this.props.history.go(2);
  }

  render () {
    const { messageArr } = this.state;
    return (
      <div>
        <h2>二集路由 -- Brouter.......</h2>
        <ul>
          {messageArr.map(i => (
            <li key={i.id}>
              {/* 1.路由组件params传参 */}
              {/* <Link to={`/demo/contentDemo/brouter/detail/${i.id}/${i.title}`}>{i.title}</Link>&nbsp; */}
              <button onClick={() => { this.pushShow(i.id, i.title); }}>push编程式路由</button>&nbsp;
              <button onClick={() => { this.repalceShow(i.id, i.title); }}>replace编程式路由</button>&nbsp;

              {/* 2.路由组件search传参 */}
              <Link to={`/demo/contentDemo/brouter/detail?id=${i.id}&title22=${i.title}`}>{i.title}</Link>

              {/* 3.路由组件state传参,replace替换当前/demo/contentDemo/brouter路由栈内存 */}
              {/* <Link to={{ pathname: '/demo/contentDemo/brouter/detail', state: { id: i.id, title22: i.title }, }} replace> {i.title}11 </Link> */}
            </li>
          ))}
        </ul>

        <hr />
        {/* 注册路由,声明接收parpms参数 */}
        {/* <Route path="/demo/contentDemo/brouter/detail/:id/:title22" component={DetailDemo} /> */}

        {/* 注册路由,接收serach / state参数无需声明,正常注册 */}
        <Route path="/demo/contentDemo/brouter/detail" component={DetailDemo} />

        <button onClick={this.back}>后退</button>&nbsp;
        <button onClick={this.forward}>前进</button>&nbsp;
        <button onClick={this.go}>go</button>&nbsp;
      </div>
    );
  }
}
