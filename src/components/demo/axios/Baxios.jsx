import React, { Component } from 'react';
import PubSub from 'pubsub-js';

export default class Baxios extends Component {
  state = {
    name: '',
    age: '',
    list: [],
    loading: false,
    err: ''
  }
  componentDidMount () {
    // 接收还能拿到消息订阅的token  // 消息订阅发送
    this.token = PubSub.subscribe('Aaxios', (msg, data) => {
      console.log(msg, data);
      // this.setState({ ...data });
      this.setState(data);
    });
  }
  componentWillUnmount () {
    PubSub.unsubscribe(this.token);
  }
  render () {
    const { name, age, list, loading, err } = this.state;
    console.log(list, 'list');
    return (
      <div>
        <h2>*****B-axios(消息订阅接收)****</h2>
        {name && age ? <div>{name}---{age}</div> : ''}
        {
          loading ? <h2>Loading......</h2> :
            err ? <h2 style={{ color: 'red' }}>{err}</h2> :
              list.length === 0 ? '暂无数据' :
                list.map(i => <img style={{ widith: '100px', height: '100px', borderRadius: '50%' }} src={i.avatar_url} key={i.id} alt="" />)
        }

      </div>
    );
  }
}
