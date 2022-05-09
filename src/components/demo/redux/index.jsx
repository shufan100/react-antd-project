import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, List, Avatar, Input } from 'antd';
import { PlusOutlined, CloseOutlined } from '@ant-design/icons';
import store from '../../../store'; // 11步
import { deleteItemAction, resetInputAction, editItemAction, checkAllItemAction } from '@/store/actions';
class ReduxDemo extends Component {
  state = {
    listIndex: -1
  }
  // input输入:（只有input才能这么拿值）
  inputChange = (e) => {
    // 正常是提交一个对象到reducers里，但是通过封装的action的方法，返回新的对象，然后再提交，和原先的直接提交是一回事
    store.dispatch(resetInputAction(e.target.value));
  }
  // 清空Input
  reset = () => {
    // 555步
    store.dispatch(resetInputAction(''));
  }
  // 添加至列表
  add = () => {
    store.dispatch({ type: 'user_set_listpush' });
  }
  // 删除列表：
  deleteItem1 = (index) => {
    // Redux简写
    store.dispatch(deleteItemAction(index));
    // Redux原始写法
    // store.dispatch({
    //   type: 'USER_DELETE_ITEM1',
    //   index
    // });
  }
  // 修改列表input状态
  handleCheck = (id) => (e) => {
    const obj = { id: id, done: e.target.checked };
    store.dispatch(editItemAction(obj));
  };
  // 全选
  handleCheckAll = (e) => {
    console.log(e.target.checked);
    store.dispatch(checkAllItemAction(e.target.checked));
  }
  // 清除全选
  handleCheckClear = () => {
    store.dispatch(checkAllItemAction(false));
  }
  handleMouse = (flag, index) => (e) => {
    // console.log(flag, e.target);
    this.setState({ listIndex: index });
  }
  render () {
    const { statelList, inputVal } = this.props; // 12步
    const { listIndex } = this.state;
    console.log('Redux', this.props, store, store.getState());
    return (
      <div>
        <hr />
        <h2>*****Redux****</h2>
        {inputVal}
        <Input placeholder={inputVal} value={inputVal === '请输入' ? '' : inputVal} className='main-input' onChange={this.inputChange} />
        <Button type="primary" icon={<PlusOutlined />} onClick={this.add}>添加至列表</Button>
        <Button type="primary" icon={<CloseOutlined />} onClick={this.reset}>清空Input</Button>
        <Button type="primary" icon={<CloseOutlined />} onClick={() => this.deleteItem1(0)}>删除第一个</Button>
        <List
          itemLayout="horizontal"
          dataSource={statelList}
          renderItem={(item, index) =>
            // 不设置key,循环就会拿索引，然后就会造成key混乱，然后虚拟dom赋值给input
            <List.Item key={item.id} style={{ backgroundColor: listIndex === index ? '#ddd' : '#fff' }} onMouseEnter={this.handleMouse(true, index)} onMouseLeave={this.handleMouse(false)}  >
              <input type="checkbox" checked={item.done} onChange={this.handleCheck(item.id)} />
              <span>{item.done ? 'true' : 'false'}</span>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<span>{item.id} -- {item.name} </span>}
                description="Ant Design" />

              <button style={{ display: listIndex === index ? 'block' : 'none' }} onClick={() => this.deleteItem1(index)}>删除</button>
            </List.Item>

          } />
        <div>
          <input type="checkbox" checked={statelList.filter(i => i.done).length === statelList.length ? true : false} onChange={this.handleCheckAll} />全选，
          已选择{statelList.filter(i => i.done).length}，全部{statelList.length}
          <button onClick={this.handleCheckClear}>清除全选</button>
        </div>
      </div>
    );
  }
}

export default connect(state => state.user)(ReduxDemo);