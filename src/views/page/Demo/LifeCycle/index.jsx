import React, { Component } from 'react';
import { Divider, Row, Col } from 'antd';
import './index.less';
import oldLife from '@/assets/images/oldLife.png'
import newLife from '@/assets/images/newLife.png'

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

  // (新增1) 初始化和更新都会走：若state的值在任何时候都取决于props,那么可以使用这个生命周期钩子
  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps--组件state的值任何时候都取决于props');
    // 作用：适用于罕见的用例，state的值任何时候都取决于props,
    // 需要返回值：1.state状态(对象)，2：null
    return null;
    // return { count1: 99 }; //返回状态对象就改不了
  }

  /**  1组件挂载完成(和Vue的mounted) */
  componentDidMount () {
    console.log('componentDidMount--组件挂载完成');
  }

  // （阀门）控制组件更新的阀门; state状态改变触发的生命周期钩子
  shouldComponentUpdate (nextProps, nextState) {
    // (开发不用写，使用PureComponent代替，会自动给我们匹配)
    console.log('shouldComponentUpdate--阀门');
    return true;
  }

  // (新增2) 更新会走:需要返回值：1.null,2.任何值
  getSnapshotBeforeUpdate (prevProps, prevState) {
    // 在最近一次渲染输出（提交到DOM节点）之前调用,它使的组件能在发生更改之前从DOM中捕获到一些信息，此生命周期的任何返回值将作为参数传递给componentDidUpdate
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

  // 强制刷新  
  force = () => {
    this.forceUpdate();
  };
  // 数据新增
  add = () => {
    this.setState({ count1: this.state.count1 + 1 })
  };
  render () {
    console.log('render')
    return (
      <div className="LifeCycle">
        <h1>类式组件生命周期</h1>
        <span>总数：{this.state.count1}</span><button onClick={this.add}>+1(state更新)</button>
        <button onClick={this.force}>不改状态，强制更新(强制刷新)</button><br />

        <Row>
          <Col span={11}>
            <h2>生命周期(旧)</h2>
            <img src={oldLife} alt="" />
            <div>
              <h3>初始化：</h3>
              constructor<br />
              1、componentWillMount--组件将要挂载<br />
              render<br />
              2、componentDidMount--组件挂载完毕<br />
            </div><br />

            <div>
              <h3>更新：</h3>
              1、componentWillReceiveProps<br />
              2、shouldComponentUpdate--(阀门)<br />
              3、componentWillUpdate--组件将要更新<br />
              render<br />
              4、componentDidUpdate--组件更新（完毕）<br />
              注：强刷不走阀门
            </div><br />

            <div>
              <h3>卸载：</h3>
              componentWillUnmount--卸载组件前
            </div><br />

            <div>
              <h3>18版本废弃钩子：</h3>
              componentWillReceiveProps<br />
              componentWillMount--将要挂载<br />
              componentWillUpdate--将要更新<br />
            </div><br />
          </Col>
          <Col span={11} offset={2}>
            <h2>生命周期(新)</h2>
            <img src={newLife} alt="" />
            <div>
              <h3>初始化：</h3>
              constructor<br />
              {/* 适用于罕见的用例，返回对象或null */}
              1、static getDerivedStateFromProps--组件state的值任何时候都取决于props<br />
              render<br />
              2、componentDidMount--组件挂载完毕<br />
            </div><br />

            <div>
              <h3>更新：</h3>
              1、static getDerivedStateFromProps--组件state的值任何时候都取决于props<br />
              2、shouldComponentUpdate--(阀门)<br />
              render<br />
              {/* 组件在更新DOM之前触发，捕获到一些信息，返回值将作为参数传递给componentDidUpdate */}
              3、getSnapshotBeforeUpdate--组件在更新DOM之前触发...<br />
              4、componentDidUpdate--组件更新（完毕）<br />
              注：强刷不走阀门
            </div><br />

            <div>
              <h3>卸载：</h3>
              componentWillUnmount--卸载组件前
            </div><br />

            <div>
              <h3>18版本新增钩子：</h3>
              static getDerivedStateFromProps--数据全部取决props<br />
              getSnapshotBeforeUpdate--数据更新，DOM更新之前<br />
            </div>
          </Col>
        </Row>
      </div >
    );
  }
}

export default Shopping;
