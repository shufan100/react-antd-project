import React, { Component } from 'react';
class Shopping extends Component {
  /**  18版本后将要废弃的生命周期钩子
 
    子组件 props更新触发的生命周期的钩子（第一次传不会触发
    componentWillReceiveProps (props) {
      console.log('Content-componentWillReceiveProps', props);
    }
    组件将要挂载的钩子
    componentWillMount () {
      console.log('Content-componentWillMount');
    }
    组件将要更新生命周期钩子
    componentWillUpdate () {
      console.log('Content-componentWillUpdate');
    }
 */
  constructor(props) {
    super(props);
    // this.state= {name:'11'}
    // this.add = this.add.bind(this)
    console.log('constructor-构造函数');
  }
  state = { count1: 1 };

  // --两个新增的生命周期钩子返回null就是什么事都不做--

  // (新增)初始化和更新都会走：若state的值在任何时候都取决于props,那么可以使用这个生命周期钩子
  // 需要返回值：1.state状态，2：null
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    // 作用：适用于罕见的用例，state的值任何时候都取决于props,
    return state;
    // return { count1: 99 }; //返回状态对象就改不了
  }
  /**  1组件挂载完成(和Vue的mounted) */
  componentDidMount() {
    console.log('componentDidMount--组件挂载完成');
  }

  // （阀门）控制组件更新的阀门; state状态改变触发的生命周期钩子
  // (开发不用写，使用PureComponent代替，会自动给我们匹配)
  shouldComponentUpdate(nextProps, nextState) {
    console.log('shouldComponentUpdate--阀门');
    return true;
  }
  // (新增)更新会走:需要返回值：1.null,2.任何值
  // 在最近一次渲染输出（提交到DOM节点）之前调用,它使的组件能在发生更改之前从DOM中捕获到一些信息，此生命周期的任何返回值将作为参数传递给componentDidUpdate
  getSnapshotBeforeUpdate(prevProps, prevState) {
    //结合定时器加载新闻的例子
    console.log('getSnapshotBeforeUpdate-新增生命周期');
    return null;
  }
  /**  2组件更新完成*/
  // shapshotValue：快照值
  componentDidUpdate(prePorps, preStae, shapshotValue) {
    console.log('componentDidUpdate--组件更新完成');
  }

  /**  3组件将要卸载*/
  componentWillUnmount() {
    console.log('componentWillUnmount--组件将要卸载');
  }

  /**  1新生命周期的钩子（初始化）：
   * constructor-构造函数 >
   * getDerivedStateFromProps-新增钩子 >
   * render-渲染 >
   * componentDidMount--组件挂载完成
   */

  /** 2新生命周期的钩子（更新）强刷不走阀门：
   * getDerivedStateFromProps-新增钩子 >
   * shouldComponentUpdate(阀门) >
   * render-渲染 >
   * getSnapshotBeforeUpdate-新增钩子 >
   * componentDidUpdate--组件更新完成
   */

  // 3新生命周期的钩子（卸载）：componentWillUnmount-组件将要卸载

  force = () => {
    this.forceUpdate();
  };
  add = () => {
    this.setState({ count1: this.state.count1 + 1 });
  };
  render() {
    console.log('render-渲染');
    return (
      <div>
        <h1>一级路由 --- 生命周期</h1>
        <h4>{this.state.count1}</h4>
        <button onClick={this.force}>不改状态，强制更新</button>
        <button onClick={this.add}>+1</button>
      </div>
    );
  }
}

export default Shopping;
