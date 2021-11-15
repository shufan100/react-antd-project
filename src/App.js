import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Router from './router';
import store from './store';


class App extends Component {
  render() {
    return (
      // 通过Provider将store传给所有被Provider包裹的子组件，所有的子组件都可以通过props获取属性值，与更新方法
      <Provider store={store}>
        <Router/>
      </Provider>
    );
  }
}

export default App;
