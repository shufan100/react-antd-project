import React, { Component } from 'react';
import {
  Link,
  NavLink,
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import './index.scss';

import Arouter from './Arouter';
import Brouter from './Brouter';

class RouterDemo extends Component {
  state = {};
  render() {
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
            <NavLink activeClassName="active11" to="/home/arouter">
              路由A
            </NavLink>
          </div>
          <div>
            <NavLink activeClassName="active11" to="/home/brouter">
              路由B-严格匹配
            </NavLink>
          </div>
        </div>
        <div className="RouterDemo-right">
          {/* 二级路由 */}
          <Switch>
            <Route path="/home/arouter" component={Arouter} />
            <Route path="/home/brouter" component={Brouter} />
            <Redirect to="/home/arouter" />
          </Switch>
        </div>
        {/* </HashRouter> */}
      </div>
    );
  }
}

export default RouterDemo;
