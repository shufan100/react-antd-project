import React, { Component } from 'react';
import {
  // Link, // 便签路由
  NavLink, // 标签路由，比Link高级一点，可带选中样式
  // BrowserRouter, // histtory路由带#
  // HashRouter, // hash路由不带#
  Route,  // 注册路由
  Switch, // 包裹了多个路由，url和路由path匹配，只渲染匹配到的路由，就停止匹配
  Redirect, //路由重定向
  withRouter //给一般组件加上路由的3大属性
} from 'react-router-dom';
import './index.scss';

import Arouter from './Arouter';
import Brouter from './Brouter';

class RouterDemo extends Component {
  state = {};

  // 一般组件挂载完，使用3个路由属性5s跳/demo/classWriting/brouter路由
  componentDidMount () {
    console.log(this.props, 'withRouter');
    setTimeout(() => {
      this.props.history.push('/demo/classWriting/brouter');
    }, 500);
  }

  render () {
    return (
      <div className="RouterDemo">
        <hr />
        <h2>*****React-Router-Demo****</h2>
        {/* <HashRouter> 因为router里有用 */}
        <div className="RouterDemo-left">
          {/* 在React中靠路由链接实现切换组件 -- 编写路由链接 */}
          {/* <div><Link to='/arouter'>路由A</Link></div>
          <div><Link to='/brouter'>路由B</Link></div> */}

          {/* NavLink 比 link稍微高级一点，可以加个高亮样式，自带active */}
          <div>
            <NavLink activeClassName="active11" to="/demo/classWriting/arouter">路由A-严格匹配</NavLink>
          </div>
          <div>
            <NavLink activeClassName="active11" to="/demo/classWriting/brouter">路由B</NavLink>
          </div>
        </div>
        <div className="RouterDemo-right">
          {/* 二级路由 */}
          <Switch>
            <Route exact path="/demo/classWriting/arouter" component={Arouter} /> {/* 注册路由 && 开启严格模式路由 */}
            <Route path="/demo/classWriting/brouter" component={Brouter} /> {/* 注册路由 */}
            <Redirect to="/demo/classWriting/arouter" /> {/* 路由重定向 */}
          </Switch>
        </div>
        {/* </HashRouter> */}
      </div>
    );
  }
}

export default withRouter(RouterDemo);
