import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import RouterView from './router';



class App extends Component {
  componentDidMount () {
    this.getToek();
  }
  getToek = () => {
    // console.log(1111, '获取token');
  }
  render () {
    return (
      // 通过Provider将store传给所有被Provider包裹的子组件，所有的子组件都可以通过props获取属性值，与更新方法
      <Provider store={store}>
        <RouterView />
      </Provider>
    );
  }
}

export default App;