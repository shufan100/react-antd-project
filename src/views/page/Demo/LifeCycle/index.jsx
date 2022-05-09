import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';
import './index.less';

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
  state = { count1: 1 };

  // --两个新增的生命周期钩子返回null就是什么事都不做--

  // (新增)初始化和更新都会走：若state的值在任何时候都取决于props,那么可以使用这个生命周期钩子
  // 需要返回值：1.state状态，2：null
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps');
    // 作用：适用于罕见的用例，state的值任何时候都取决于props,
    return state;
    // return { count1: 99 }; //返回状态对象就改不了
  }
  /**  1组件挂载完成(和Vue的mounted) */
  componentDidMount () {
    console.log('componentDidMount--组件挂载完成');
  }

  // （阀门）控制组件更新的阀门; state状态改变触发的生命周期钩子
  // (开发不用写，使用PureComponent代替，会自动给我们匹配)
  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate--阀门');
    return true;
  }
  // (新增)更新会走:需要返回值：1.null,2.任何值
  // 在最近一次渲染输出（提交到DOM节点）之前调用,它使的组件能在发生更改之前从DOM中捕获到一些信息，此生命周期的任何返回值将作为参数传递给componentDidUpdate
  getSnapshotBeforeUpdate (prevProps, prevState) {
    //结合定时器加载新闻的例子
    console.log('getSnapshotBeforeUpdate-新增生命周期');
    return null;
  }
  /**  2组件更新完成*/
  // shapshotValue：快照值
  componentDidUpdate (prePorps, preStae, shapshotValue) {
    console.log('componentDidUpdate--组件更新完成');
  }

  /**  3组件将要卸载*/
  componentWillUnmount () {
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

  // 强制刷新  
  force = () => {
    this.forceUpdate();
  };
  // 数据新增
  add = () => {
    this.setState({ count1: this.state.count1 + 1 })
    let b = {
      a: 11
    }
  };
  render () {
    return (
      <div className="LifeCycle">
        <h1>生命周期</h1>
        <span>总数：{this.state.count1}</span><button onClick={this.add}>+1(state更新)</button>
        <br />
        <button onClick={this.force}>不改状态，强制更新(强制刷新)</button>
        <Divider>生命周期(新)</Divider>
        {/* <Row>
          <Col span={8}>col-8</Col>    
          <Col span={8} offset={8}>   111rwrwrwrwrr </Col>
        </Row> */}
        <div></div>
        <ul>
          <li>
            <h2>初始化</h2>
            <div>

            </div>
          </li>
          <li>
            <h2>初始化</h2>
            <div>

            </div>
          </li>
          <li>
            <h2>卸载</h2>
            <div>
              componentWillUnmount
            </div>
          </li>
        </ul>
        <h2>
          1新生命周期的钩子（初始化）：
          constructor-构造函数 &gt;
          getDerivedStateFromProps-新增钩子 &gt;
          render-渲染 &gt;
          componentDidMount--组件挂载完成
        </h2>

        2新生命周期的钩子（更新）强刷不走阀门：
        * getDerivedStateFromProps - 新增钩子 & gt;
        * shouldComponentUpdate(阀门) & gt;
        * render - 渲染 & gt;
        * getSnapshotBeforeUpdate - 新增钩子 & gt;
        * componentDidUpdate--组件更新完成
      </div >
    );
  }
}

export default Shopping;
