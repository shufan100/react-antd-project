import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { getUserInfo } from '@/store/actions';
import Login from '../views/login';
import Layout from '../views/layout';

class Router extends React.Component {
  render () {
    const { token } = this.props;

    return (
      <HashRouter hashType="slash">
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route path="/" render={() => {
            if (!token) {
              return <Redirect to="/login" />;
            } else {
              return <Layout />;
            }
          }}
          // eslint-disable-next-line react/jsx-closing-bracket-location
          />

        </Switch>
      </HashRouter>
    );
  }
}

export default connect(state => state.user)(Router);
