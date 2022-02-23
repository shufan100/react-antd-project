import React, { Component } from 'react';
class DiffDemo extends Component {
  state = {
    personList: [
      { id: 1, name: '小子', age: 18 },
      { id: 2, name: '小李', age: 19 },
    ],
  }

  addPerson = () => {
    const { personList } = this.state;
    const obj = { id: 3, name: '小王', age: 20 };
    this.setState({ personList: [obj, ...personList] });
  }

  /**
  慢动作回放  -- 使用index索引值做key的问题
    初始化数据：
      { id: 1, name: '小子', age: 18 }
      { id: 2, name: '小李', age: 19 }
    初始的虚拟DOM:
      <li key=0> 小子 --- 18 </li>
      <li key=1> 小李 --- 18 </li>
   
    添加小王 更新后的数据：
      { id: 3, name: '小王', age: 20 }
      { id: 1, name: '小子', age: 18 }
      { id: 2, name: '小李', age: 19 }
    更新数据后的虚拟DOM:  （把小王数据放在前面渲染，索引变了，那么旧的虚拟dom的key与新的虚拟dom的内容不一样，就创建新的真的dom替换页面中的dom，这就照成性能问题）
      <li key=0> 小王 --- 18 </li>
      <li key=1> 小子 --- 18 </li>
      <li key=2> 小李 --- 18 </li>
   */

  render () {
    const { personList } = this.state;
    return (
      <div>
        <hr />
        <h2>*****diff****</h2>
        <h1>diff算法 -- 使用 index作为索引</h1>
        <ul>
          {
            personList.map((item, index) => <li key={index}>{item.name} --- {item.age} <input type='text' /></li>)
          }
        </ul>
        <h1>diff算法 -- 使用 id作为索引</h1>
        <ul>
          {
            personList.map((item, index) => <li key={item.id}>{item.name} --- {item.age} <input type='text' /></li>)
          }
        </ul>
        <button onClick={this.addPerson}>添加</button><br />
      </div>
    );
  }
}

export default DiffDemo;