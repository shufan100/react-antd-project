import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getUserInfo } from '@/store/actions';
import Layout from '@/views/layout';
import Login from '@/views/login';
class Router extends React.Component {
  render() {
    // const { token, role, getUserInfo } = this.props;
    return (
      <HashRouter>
        <Switch>
          {/* exact:因为渲染其他路由时，时包含了/路由，所有加exact防止渲染首页路由 */}
          {/* <Route exact path="/login" component={Login} /> */}
          <Layout />
          {/* <Route
            path="/"
            render={
              () => (
                // if (!token) {
                // <Redirect to="/login" />
              )
              // } else {
              //   if (role) {
              //     return <Layout />;
              //   } else {
              //     getUserInfo(token).then(() => <Layout />);
              //   }
              // }
            }
          /> */}
        </Switch>
      </HashRouter>
    );
  }
}

// export default connect(state => state.user, { getUserInfo })(Router);
export default Router;
