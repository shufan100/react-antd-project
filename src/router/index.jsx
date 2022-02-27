import React from 'react';
import {
  BrowserRouter,
  HashRouter,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
// import { getUserInfo } from '@/store/actions';
import Login from '../views/login';
import Layout from '../views/layout';

class Router extends React.Component {
  render() {
    const { token } = this.props;

    return (
      // 路由一定要用这个容器包裹HashRouter 或 BrowserRouter
      <BrowserRouter hashType="slash">
        {/* Switch组件,组件路由匹配到就不会继续往下匹配了,不加匹配到了还会继续匹配，直到匹配完全部路由 */}
        <Switch>
          {/* exact精准匹配 */}
          <Route exact path="/login" component={Login} />
          <Route
            path="/"
            render={() => {
              if (!token) {
                return <Redirect to="/login" />;
              } else {
                return <Layout />;
              }
            }}
          />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default connect(state => state.user)(Router);
