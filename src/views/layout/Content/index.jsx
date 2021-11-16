import React, { Component } from 'react';
import { Layout, Button, List, Avatar, Input } from 'antd';
import { PlusOutlined,CloseOutlined } from '@ant-design/icons';
import './index.scss';
import { connect } from 'react-redux';
import store from '../../../store';
import { deleteItemAction } from '@/store/actions';
const { Content } = Layout;;
class LayoutContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }
  render () {
    const { statelList , inputVal } = this.props;
    return (
      <Content className='main'>
        中间内如，动态

        <List
          itemLayout="horizontal"
          dataSource={this.state.list}
          renderItem={item => (
            <List.Item>
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<a href="https://ant.design">{item.title}</a>}
                description="Ant Design, a design language for background applications, is refined by Ant UED Team" />
            </List.Item>
          )} />

        <hr />
        {inputVal}
        <Input placeholder={inputVal} value={inputVal==='请输入'?'':inputVal} className='main-input' onChange={this.inputChange.bind(this)} />
        <Button type="primary" icon={<PlusOutlined />} onClick={this.add.bind(this)}>
          添加至列表
        </Button>
        <Button type="primary" icon={<CloseOutlined />} onClick={this.reset.bind(this)}>
          清空Input
        </Button>
        <br/>
        <Button type="primary" icon={<CloseOutlined />} onClick={this.deleteItem1.bind(this,0)}>
          删除列表-简写1
        </Button>
        <List
          itemLayout="horizontal"
          dataSource={statelList}
          renderItem={(item,index) => (
            <List.Item onClick={this.deleteItem.bind(this,item,index)}>
            {/* // <List.Item onClick={this.deleteItem1.bind(this,i ndex)}> */}
              <List.Item.Meta
                avatar={<Avatar src="https://joeschmoe.io/api/v1/random" />}
                title={<span>{item}</span>}
                description="Ant Design" />
            </List.Item>
          )} />
      </Content>
    );
  }
  // 新增
  add () {
    store.dispatch({type:'USER_SET_LISTPUSH'});
  }
  reset(){
    store.dispatch({
      type:'USER_SET_INPUTCHANGE',
      value:''
    });
  }
  // 输入
  inputChange (e) {
    store.dispatch({
      type:'USER_SET_INPUTCHANGE',
      value:e.target.value
    });
  }
  // 删除列表
  // 原始写法
  deleteItem(item,index){
    store.dispatch({
      type:'USER_DELETE_ITEM1',
      index
    });
  }
  // 简写1：
  deleteItem1(index){
    store.dispatch(deleteItemAction(index));
  }

}

export default connect(state => state.user)(LayoutContent);
