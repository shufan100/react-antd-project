import React, { Component } from 'react';

class Count extends Component {
  state = {
    count: 0
  }
  calculate = (type) => {
    console.log(type);
    const { count } = this.state;
    const { value } = this.sectionNode;
    if (type === 'add') {
      this.setState({ count: count + value * 1 });
    }
    if (type === 'sub') {
      this.setState({ count: count - value * 1 });
    }
    if (type === 'padd' && count % 2 !== 0) {
      this.setState({ count: count + value * 1 });
    }
    if (type === 'asyncadd') {
      setTimeout(() => {
        this.setState({ count: count + value * 1 });
      }, 500);
    }
  }
  render () {
    return (
      <div>
        <h2>*****Redux - 计算****</h2>
        <div>当前求和为{this.state.count}</div>
        <select ref={c => this.sectionNode = c}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <button onClick={() => this.calculate('add')}>加法</button>
        <button onClick={() => this.calculate('sub')}>减法</button>
        <button onClick={() => this.calculate('padd')}>奇数加</button>
        <button onClick={() => this.calculate('asyncadd')}>异步加</button>
      </div>
    );
  }
}
export default Count;