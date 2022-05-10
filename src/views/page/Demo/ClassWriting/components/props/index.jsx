import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class PropsDemo extends Component {
  state = {}
  // *********prop校验简写**********************************************************
  // class内写：校验props类型
  static propTypes = {
    name: PropTypes.string.isRequired,  // 必传：isRequired
    sex: PropTypes.string, //不必传
    age: PropTypes.number, //不必传
    address: PropTypes.string, //不必传
    speak: PropTypes.func  //不必传，函数校验
  };
  // 不传设置默认值
  static defaultProps = {
    name: 'jerry',
    sex: '男',
    age: 20,
    address: '美国旧金山。。。'
  };


  render () {
    const { sex, address } = this.props;
    return (
      <div>
        <hr />
        <h2>*****Props*****</h2>
        {/************************* props：只读的不允许改 *****************************************************************/}
        <div>
          <span>props接收值：{this.props.name}-{this.props.age + 1}-{sex}-{address}</span>
          <button type="primary" onClick={() => this.props.speak('csss')}>props传入的函数</button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.user)(PropsDemo);
