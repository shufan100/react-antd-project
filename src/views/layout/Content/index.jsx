import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { PropTypes } from 'prop-types';
import { Layout, Button, List, Avatar, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import './index.scss';
import { connect } from 'react-redux';
import store from '../../../store'; // 11步
import { deleteItemAction, resetInputAction } from '@/store/actions';  // 444步
const { Content } = Layout;

// ---------------------------------类式组件-----------------------------------------------------------

class LayoutContentClass extends Component {
  // 渲染1次 构造器能省略就省略不写
  constructor(props) {
    super(props);
  // this.state= {name:'11'}
  // this.add = this.add.bind(this)
  console.log('Content-constructor');
  }

  // *********prop校验简写**********************************************************
  // class内写：校验props类型
  static propTypes = {
    name: PropTypes.string.isRequired,  // 必传：isRequired
    sex: PropTypes.string, //不必传
    age: PropTypes.number, //不必传
    address: PropTypes.string, //不必传
    speak: PropTypes.func,  //不必传，函数校验
  };
  // 不传设置默认值
  static defaultProps = {
    name: 'jerry',
    sex: '男',
    age: 20,
    address: '美国旧金山。。。',
  };

  // *********初始化状态**********************************************************
  state = {
    list: [
      {
        title: 'Ant Design Title 1',
      },
      {
        title: 'Ant Design Title 2',
      },
      {
        title: 'Ant Design Title 3',
      },
      {
        title: 'Ant Design Title 4',
      },
    ],
    isShow: true,
    list2: ['Angular', 'React', 'Vue'],
    opacity:0.5,
    count:0
  };
  // 创建ref容器，一个容器对应一个
  myRef = React.createRef();

  // 自定义方法(是直接挂在LayoutContent实例对象上)8******************************************
  demo () {
    console.log('按钮1', this);
  }
  demo1 = () => {
    console.log('按钮2', this);

  }
  demo2 = (param) => {
    console.log('按钮3', param, this);

  }
  // setState ******************************************
  setShow () {
    // 严重注意：state必须通过setState进行更新，且更新的动作好是合并
    this.setState({
      isShow: !this.state.isShow
    });
    // this.props.speak() //props传入的函数
  }
  // -------------------------------------------------------
  // 新增
  add = () => {
    store.dispatch({ type: 'user_set_listpush' });
  }
  reset = () => {
    // 555步
    store.dispatch(resetInputAction(''));
    // store.dispatch({
    //   type:'USER_SET_INPUTCHANGE',
    //   value:''
    // });
  }
  // 输入
  inputChange (e) {
    // 正常是提交一个对象到reducers里，但是通过封装的action的方法，返回新的对象，然后再提交，和原先的直接提交是一回事
    // 
    store.dispatch(resetInputAction(e.target.value));
    // store.dispatch({
    //   type:'USER_SET_INPUTCHANGE',
    //   value:e.target.value
    // });
  }
  // 删除列表
  // 原始写法
  deleteItem (item, index) {
    store.dispatch({
      type: 'USER_DELETE_ITEM1',
      index
    });
  }
  // 简写1：
  deleteItem1 (index) {
    store.dispatch(deleteItemAction(index));
  }

  // 字符串ref(弃用)
  showData = () => {
    // ref弃用，效率不高，
    const { input1 } = this.refs;
    console.log(input1.value);
  }

  // 内联ref
  showData2 = () => {
    console.log(this, this.input2.value);
  }

  // 内联ref写出外写函数(开发推荐内联)
  saveInputRef = (currentNode) => {
    this.input3 = currentNode;
  }
  showData3 = () => {
    console.log(this.input3.value);
  }

  // createdRef (最推荐)
  showData4 = () => {
    console.log(this.myRef.current.value);
  }
  showData5 = (e) => {
    // e.target指对应的dom节点（input（5））
    console.log(e.target.value);
  }


  // {/************************* 生命周期函数 *****************************************************************/}
  death = () =>{
    ReactDOM.unmountComponentAtNode(document.getElementById('root'));
    // clearInterval(this.timer);
  }
  addCount = () =>{
    const {count} = this.state;
    this.setState({count:count+1});
  }
  force = () =>{
    this.forceUpdate();
  }

  // 组件将要挂载的钩子
  componentWillMount() {
    console.log('Content-componentWillMount');

  }
  // 组件挂载完毕的钩子（mounted）
  componentDidMount() {
    console.log('Content-componentDidMount');
    // this.timer = setInterval(() => {
    //   let { opacity } = this.state;
    //   opacity -= 0.1;
    //   if(opacity <= 0) opacity =1;   
    //   this.setState({opacity});
    // }, 200);
  }
  // 组件将要卸载的钩子
  componentWillUnmount() {
    // clearInterval(this.timer);
    console.log('Content-componentWillUnmount');
  }
 // 更新state状态触发的生命周期钩子 
  shouldComponentUpdate() {
    // 不写，react默认会在后台加这钩子并返回true,写了返回false,生命周期就不往下走了
    console.log('Content-shouldComponentUpdate');
    return true;
  }
  // 组件将要更新生命周期钩子
  componentWillUpdate() {
    console.log('Content-componentWillUpdate');
  }
  // 组件已经更新生命周期钩子
  componentDidUpdate() {
    console.log('Content-componentDidUpdate');  //111

  }
  
  


  // 1、初始化渲染,状态更新之后渲染 、(渲染 1+n次，每次修改数据都会重新渲染 jsx)
  // 2、在class类内部定义的方法已经自动开启了严格模式，类内部方法的this不指向window
  render () {
    // render中的this是谁？ —— LayoutContent的实例对象；LayoutContent组件实例对象
    // 组件实例的三大属性：props、refs、state
    // console.log('LayoutContent实例对象：(render)', this);
    console.log('Content-render');

    const { statelList, inputVal, sex, address } = this.props; // 12步
    const { list2 } = this.state;
    return ( //下面的结构不是真正的html，是jsx,虚拟dom，需要ReactDOM转成真正的html标签，变成真实dom显示在页面
      <Content className='main'>
        {/************  jsx结构内只能写表达式 、或者有返回值得语句（代码）***************/}

        {/************************* 内嵌样式style *****************************************************************/}
        <h1 style={{ color: 'red', textAlign: 'center' }}>类式组件</h1>

        {/************************* 三元表达式 *****************************************************************/}
        {this.state.isShow ? <span>控制功能块现实隐藏</span> : ''}
        <Button type="primary" onClick={this.setShow.bind(this)}>显示/隐藏</Button>

        {/************************* for循环 / if判断 *****************************************************************/}
        <ul>
          {
            list2.map((i, index) => {
              let li = '';
              if (i !== 'Angular') {
                li = <li key={index}>{i}</li>;
              }
              return li;
            })
          }
        </ul>

        {/************************* 3种事件写法 *****************************************************************/}
        {/* 
          <button onClick={this.demo}>按钮1</button> 
          1、demo方法放在哪里?  —— LayoutContent的原型对象上，供实例使用
          2、由于demo是作为onClick的回调，所有不是通过实例调用的，是直接调用
          3、类中的方法默认开启局部的严格模式，所以demo方法的this为undefined
        */}
        <button onClick={this.demo.bind(this)}>按钮1</button>
        <button onClick={this.demo1}>按钮2</button>
        <button onClick={() => this.demo2('参数')}>按钮3</button>

        {/************************* props：只读的不允许改 *****************************************************************/}
        <div>
          <span>props接收值：{this.props.name}-{this.props.age + 1}-{sex}-{address}</span>
          <Button type="primary" onClick={this.props.speak.bind(this)}>props传入的函数</Button>
        </div>

        {/************************* refs *****************************************************************/}
        {/* refs: 弃用ref字符串写法，效率不高；建议使用回调函数和createRef写法代替 /}
        {/* <input ref='input1' type="text" placeholder='点击提示数据' />&nbsp;
        <button onClick={this.showData}>提示左侧数据</button>&nbsp; */}
        {/*内联: a是input节点， this.input2 = a：this是LayoutContent实例对象，在实例对象上加个input2实例，然后将节点a赋值给input2*/}
        <input ref={currentNode => this.input2 = currentNode} onBlur={this.showData2} type="text" placeholder='失焦提示数据' />{/* (开发推荐内联) */}
        {/* 不内联：内联会触发2次，要calss绑定的方式就不会 */}
        <input ref={this.saveInputRef} onBlur={this.showData3} type="text" placeholder='失焦提示数据3' />
        {/* createdRef */}
        <input ref={this.myRef} onBlur={this.showData4} type="text" placeholder='失焦提示数据4' />
        {/* 避免过度使用ref */}
        <input onBlur={this.showData5} type="text" placeholder='失焦提示数据5' />

        {/************************* 生命周期 *****************************************************************/}
        <div>
          <h2 style = {{ opacity:this.state.opacity}}>react学不会怎么办？</h2>
          <button onClick={this.death}>不活了、卸载组件</button>
        </div>
        <div>
          <h2 >当前求和{this.state.count}</h2>
          <button onClick={this.addCount}>点我+1</button>
          <button onClick={this.death}>卸载组件</button>
          <button onClick={this.force}>不改状态，强制更新</button>
        </div>


        <hr />
        <hr />
        <hr />
        {inputVal}
        <Input placeholder={inputVal} value={inputVal === '请输入' ? '' : inputVal} className='main-input' onChange={this.inputChange.bind(this)} />
        <Button type="primary" icon={<PlusOutlined />} onClick={this.add}>
          添加至列表
        </Button>
        <Button type="primary" icon={<CloseOutlined />} onClick={this.reset}>
          清空Input
        </Button>
        {/* <br /> */}
        <Button type="primary" icon={<CloseOutlined />} onClick={this.deleteItem1.bind(this, 0)}>
          删除列表-简写1
        </Button>
        <List
          itemLayout="horizontal"
          dataSource={statelList}
          renderItem={(item, index) => (
            // <List.Item onClick={this.deleteItem.bind(this, item, index)}>
            <List.Item onClick={this.deleteItem1.bind(this, index)}>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<span>{item}</span>}
                description="Ant Design" />
            </List.Item>
          )} />


      </Content>
    );
  }


}


// ---------------------------------函数式组件--------------------------------------------------------------

// 1、函数首字母必须大写 2、函数必须有返回值 3、只能使用props,因为props是个函数，其他不可使用(refs.state等等)
const LayoutContentFun = (props) => {
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
        <span>props接收值：{props.name}-{age + 1}-{sex}-{address}</span>
        <Button type="primary" onClick={props.speak}>props传入的函数</Button>
      </div>
    </div>
  );
};
// 放在class里简写，给clas类增加两个属性（函数式组件只能放在外面写）
// 校验props类型;
LayoutContentFun.propTypes = {
  name: PropTypes.string.isRequired,  // 必传：isRequired
  sex: PropTypes.string,
  age: PropTypes.number,
  address: PropTypes.string,
  speak: PropTypes.func,  //函数校验
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
