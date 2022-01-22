import React, { Component } from 'react';
import { Layout, Button, List, Avatar, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import './index.scss';
import { connect } from 'react-redux';
import store from '../../../store'; // 11步
import { deleteItemAction, resetInputAction } from '@/store/actions';  // 444步
const { Content } = Layout;
// 类式组件
class LayoutContent extends Component {
  // 渲染1次 不写
  // constructor(props) {
  //   super(props);
  // }
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
    isShow:true,
    list2:['Angular','React','Vue']
  };
  // 1、在class类内部定义的方法已经自动开启了严格模式，类内部方法的this不指向window
  // 2、渲染 1+n次，每次修改数据都会重新渲染
  render () {
    console.log('render');
    // render中的this是谁？ —— LayoutContent的实例对象；LayoutContent组件实例对象
    // 组件实例的三大属性：props、refs、state
    console.log('LayoutContent实例对象：',this);
    const { statelList, inputVal } = this.props; // 12步
    return (
      <Content className='main'>
        {/* jsx结构内只能写表达式 、或者有返回值得语句（代码）*/}

        {/* 内嵌样式style */}
        <h1 style={{color: 'red', textAlign: 'center'}}>类式组件</h1> 
        {/* v-if */}
        {this.state.isShow ? <span>控制功能块现实隐藏</span>:''}
        <Button type="primary" onClick={this.setShow.bind(this)}>显示/隐藏</Button>
        {/* for循环 / if判断 */}
        <ul>
          {
            this.state.list2.map((i,index)=>{
              let li = '';
              if(i !== 'Angular'){
                li =  <li key={index}>{i}</li>;
              }
              return li;
          })
          }
        </ul>
        {/* 事件 */}
        {/* 
          1、demo方法放在哪里?  —— LayoutContent的原型对象上，供实例使用
          2、由于demo是作为onClick的回调，所有不是通过实例调用的，是直接调用
          3、类中的方法默认开启局部的严格模式，所以demo方法的this为undefined
        */}
        <button onClick={this.demo}>按钮1</button>
        <button onClick={this.demo1.bind(this)}>按钮2</button>
        <button onClick={() => this.demo2('参数')}>按钮3</button>
        {/* props */}
        <div>props接收值：{this.props.name} -- {this.props.layoutName}</div>

        <hr/>
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
  // 自定义方法(是直接挂在LayoutContent实例对象上)8******************************************
  demo(){
    console.log(this); 
  }
  demo1(){
    console.log(this);
  }
  demo2 = (name) =>{
    console.log(this,name);
  }
  // setState ******************************************
  setShow(){
    // 严重注意：state必须通过setState进行更新，且更新的动作好是合并
    this.setState({
      isShow:!this.state.isShow
    });
  }
  // 
  // -------------------------------------------------------
  // 新增
  add = ()=> {
    store.dispatch({ type: 'user_set_listpush' });
  }
  reset = ()=> {
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

}

// 函数式组件
  // 1、函数首字母必须大写
  // 2、函数必须有返回值  
const Contents = () => {
  console.log(this);  // undefined,不是window：因为babel插件编译后开启了严格模式，禁止自定义的函数this指向window
  let num = 0;
  const addNum = e => {
    num++;
    // console.log(num, e);
  };
  const getName = param => {
    // console.log(num, param);
  };
  return (
    <div className="app-container">
      <h1 style={{ color: 'red', textAlign: 'center' }}>函数式组件</h1>
      <button onClick={addNum}>按钮</button>
      <button onClick={getName.bind(this, 'name')}>按钮2</button>
      {/* <Alert message="Success Text" type="success" /> */}
    </div>
  );
};

// connect用这个方法reducers才监听的到 666步
export default connect(state => state.user)(LayoutContent);
// export default connect(state => state.user)(Contents);
