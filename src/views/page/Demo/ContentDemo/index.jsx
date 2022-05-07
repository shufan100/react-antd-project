// import React, { Component, PureComponent } from 'react';
import React, { Component } from 'react';
// PureComponent代替component，阀门生命周期的就不用写了，PureComponent会自动写好阀门的对比逻辑：从而提示组件在数据没变化的时候不会render组件
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { connect } from 'react-redux';

import { Button } from 'antd';
import './index.scss';

// 引用事例
import AaxiosDemo from '@/components/demo/axios/Aaxios';
import BaxiosDemo from '@/components/demo/axios/Baxios';
import ReduxDemo from '@/components/demo/redux';
import ReduxDemo2 from '@/components/demo/redux/index2';
import RefDemo from '@/components/demo/ref';
import DiffDemo from '@/components/demo/diff';
import ClickDemo from '@/components/demo/click';
import PropsDemo from '@/components/demo/props';
import JsxDemo from '@/components/demo/jsx';
import RouterDemo from '@/components/demo/router';


// ---------------------------------类式组件-----------------------------------------------------------

// class LayoutContentClass extends PureComponent {
class LayoutContentClass extends Component {
  // 渲染1次 构造器能省略就省略不写
  // constructor(props) {
  //   super(props);
  //   // this.state= {name:'11'}
  //   // this.add = this.add.bind(this)
  //   // console.log('Content-constructor');
  // }

  // *********初始化状态state**********************************************************
  state = {
    opacity: 1,
    sex: '女',
    address: '中国北京。。。',
    count: 0,
    newsArr: [],
    hasError: '',
  };
  speak = param => {
    console.log('你点击了我！', param);
  };

  // {/************************* 生命周期函数 *****************************************************************/}
  death = () => {
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    clearInterval(this.timer);
    clearInterval(this.timer2);
  };
  // 对象式setState：如果新状态不依赖于原状态，比如点击直接等于99
  addCount = () => {
    const { count } = this.state;
    this.setState({ count: 99 });
  };
  // 函数式setState：如果新状态依赖于原状态 ===> 使用函数方式，修改原来的数据
  addCount2 = () => {
    this.setState((state, props) => {
      console.log(state, props);
      return { count: state.count + 1 };
    });
    // 对象式写法
    // const { count } = this.state;
    // this.setState({ count: count + 1 });
  };
  force = () => {
    this.forceUpdate();
  };
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

  // （阀门）控制组件更新的阀门; state状态改变触发的生命周期钩子
  // (开发不用写，使用PureComponent代替，会自动给我们匹配)
  shouldComponentUpdate (nextProps, nextState) {
    // 不写，react默认会在后台加这钩子并返回true,写了返回false,生命周期就不往下走了
    // this.props,this.state：修改数据前的props和state
    // nextProps,nextState：修改后的变化的props,state
    // 数据不改变就不更当前新组件
    console.log('Content-shouldComponentUpdate');
    // console.log(this.state.count, nextState.count);
    // return !this.state.count === nextState.count; //根据数据是否改变，来渲染组件
    return true; //根据数据是否改变，来渲染组件
  }

  // 组件挂载完毕的钩子（mounted）(*常用*)  初始化，发生ajax
  componentDidMount () {
    console.log('Content-componentDidMount');
    // this.timer = setInterval(() => {
    //   let { opacity } = this.state;
    //   opacity -= 0.1;
    //   if (opacity <= 0) opacity = 1;
    //   this.setState({ opacity });
    // }, 1000);
    // this.timer2 = setInterval(() => {
    //   const { newsArr } = this.state;
    //   const news = `新闻${newsArr.length + 1}`;
    //   this.setState({ newsArr: [news, ...newsArr] });
    // }, 1000);
  }
  // (新增) 当组件的数据完全使用props传递进来的才用的生命周期钩子
  static getDerivedStateFromProps (props, state) {
    console.log('Content-getDerivedStateFromProps');
    return null;
  }
  // (新增)的两个生命周期钩子：
  getSnapshotBeforeUpdate () {
    console.log('Content-getSnapshotBeforeUpdate');
    // return this.refs.list.scrollHeight;
    return this.listRef.scrollHeight;
  }
  // 组件已经更新生命周期钩子
  componentDidUpdate (preProps, preState, height) {
    // console.log('Content-componentDidUpdate'); //111
    // this.refs.list.scrollTop += this.refs.list.scrollHeight - height;
    this.listRef.scrollTop += this.listRef.scrollHeight - height;
  }

  // 组件将要卸载的钩子  (*常用*)
  componentWillUnmount () {
    clearInterval(this.timer);
    clearInterval(this.timer2);
    console.log('Content-componentWillUnmount');
  }



  // 1、初始化渲染,状态更新之后渲染 、(渲染 1+n次，每次修改数据都会重新渲染 jsx)
  // 2、在class类内部定义的方法已经自动开启了严格模式，类内部方法的this不指向window
  render () {
    // render中的this —— LayoutContent的实例对象
    const { opacity } = this.state;
    return (
      //下面的结构不是真正的html，是jsx,虚拟dom，需要ReactDOM转成真正的html标签，变成真实dom显示在页面
      /** */ <div className="layoutContent" id='LayoutContentClass'>
        <h1 style={{ color: 'red', textAlign: 'center' }}>类式组件</h1>

        {/************************* 生命周期 *****************************************************************/}
        <div>
          <h2 style={{ opacity: opacity }}>react学不会怎么办？</h2>
          <Button type="primary" onClick={this.death}>
            不活了、卸载组件
          </Button>
        </div>
        <div>
          <h2>当前求和{this.state.count}</h2>
          <Button onClick={this.addCount}>对象式setState =99</Button>
          <Button onClick={this.addCount2}>函数式setState +1</Button>
          <Button onClick={this.death}>卸载组件</Button>
          <Button onClick={this.force}>不改状态，强制更新</Button>
        </div>
        {/*************************  事例+getSnapshotBeforeUpdate *****************************************************************/}
        {/* <div className='list' ref='list'> */}
        <div className="list" ref={c => (this.listRef = c)}>
          {this.state.newsArr.map((n, index) => (
            <div key={index} className="news">
              {n}
            </div>
          ))}
        </div>

        <JsxDemo />

        {/* 批量props传值：展开运算符的写法是一个个写的语法糖 */}
        <PropsDemo age={18} name="tom" {...this.state} speak={this.speak} />

        <ClickDemo />

        <DiffDemo />

        <RefDemo />

        <AaxiosDemo />
        <BaxiosDemo />

        <RouterDemo />

        <ReduxDemo />
        <ReduxDemo2 />
      </div>
    );
  }
}

// ---------------------------------函数式组件--------------------------------------------------------------

// 1、函数首字母必须大写 2、函数必须有返回值 3、只能使用props,因为props是个函数，其他不可使用(refs.state等等)
const LayoutContentFun = props => {
  // console.log(this);  // undefined,不是window：因为babel插件编译后开启了严格模式，禁止自定义的函数this指向window
  const { age, sex, address } = props;
  console.log(props);
  let num = 0;
  const addNum = e => {
    num++;
    console.log(num);
  };
  const getName = param => {
    console.log(param);
  };

  return (
    <div className="app-container">
      <h1 style={{ color: 'red', textAlign: 'center' }}>函数式组件</h1>
      <button onClick={addNum}>按钮</button>
      <button onClick={getName.bind(this, 'name21111')}>按钮2</button>
      <div>
        <div>函数式组件props接收值、方法</div>
        <span>
          props接收值：{props.name}-{age + 1}-{sex}-{address}
        </span>
        <Button type="primary" onClick={props.speak}>
          props传入的函数
        </Button>
      </div>
    </div>
  );
};
// 放在class里简写，给clas类增加两个属性（函数式组件只能放在外面写）
// 校验props类型;
LayoutContentFun.propTypes = {
  name: PropTypes.string.isRequired, // 必传：isRequired
  sex: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.string,
  speak: PropTypes.func, //函数校验
};
//设置props默认值
LayoutContentFun.defaultProps = {
  name: 'jerry',
  sex: '男',
  age: 20,
  address: '美国旧金山。。。',
};

// connect用这个方法reducers才监听的到 666步
export default connect(state => state.user)(LayoutContentClass);
// export default connect(state => state.user)(LayoutContentFun);
