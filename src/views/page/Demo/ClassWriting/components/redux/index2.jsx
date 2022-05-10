import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addAction, subAction, paddAction, addAsyncAction } from '@/store/actions';

class Count extends Component {
  render () {
    const { addAction, subAction, paddAction, addAsyncAction } = this.props;
    return (
      <div>
        <h2>*****Redux - 计算****</h2>
        <h4>当前求和为{this.props.count}</h4>
        <select ref={c => this.sectionNode = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={() => addAction(this.sectionNode.value)}>加法</button>
        <button onClick={() => subAction(this.sectionNode.value)}>减法</button>
        <button onClick={() => paddAction(this.sectionNode.value)}>奇数加</button>
        <button onClick={() => addAsyncAction(1000, this.sectionNode.value)}>异步加</button>
      </div>
    );
  }
}
export default connect(state => state.user, { addAction, subAction, paddAction, addAsyncAction })(Count);