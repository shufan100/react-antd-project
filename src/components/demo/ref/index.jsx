import React, { Component } from 'react';
class RefDemo extends Component {
  state = {}
  // 创建ref容器，一个容器对应一个
  myRef = React.createRef();

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

  render () {
    return (
      <div>
        <hr />
        <h2>*****Ref****</h2>
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
      </div>
    );
  }
}

export default RefDemo;