import React from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
// import { connect } from 'react-redux';
// import { getUserInfo } from '@/store/actions';
import Login from '../views/login';
import Layout from '../views/layout';

class Router extends React.Component {
  render() {
    // const props = this.props;

    return (
      <HashRouter hashType="slash">
        <Switch>
          <Route
            path="/"
            render={() => {
              if (false) {
                return <Route exact path="/login" component={Login} />;
              } else {
                return <Layout />;
              }
            }}
            // eslint-disable-next-line react/jsx-closing-bracket-location
          />
          <Route exact path="/login" component={Login} />
        </Switch>
      </HashRouter>
    );
  }
}

export default Router;
