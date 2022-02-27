// import React, { Component, useState, memo, useMemo } from 'react';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Layout } from 'antd';
import store from '@/store';
import { toggleSiderBar, setTitleAction } from '@/store/actions';

import './index.scss';
import { MenuFoldOutlined, MenuUnfoldOutlined } from '@ant-design/icons';

const { Header } = Layout;
class LayoutHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // componentWillMount() {
  //   console.log(111);
  // }
  // 组件挂载完毕（mounted）
  // componentDidMount() {
  //   this.add();
  // }
  add() {
    // console.log(this.props);
  }
  setTitle() {
    store.dispatch({
      type: 'APP_SET_TITLE',
    });
  }
  render() {
    // console.log(this.props);
    const { toggleSiderBar, setTitleAction } = this.props;
    // console.log(this.props);
    let Icon = null;
    if (this.props.sidebarCollapsed) {
      Icon = (
        <MenuUnfoldOutlined className="header-icon" onClick={toggleSiderBar} />
      );
    } else {
      Icon = (
        <MenuFoldOutlined className="header-icon" onClick={toggleSiderBar} />
      );
    }
    return (
      <Header>
        {/* 收缩菜单 */}
        {Icon}
        {/* <span onClick={this.setTitle.bind(this)}>中/英</span> */}
        <span onClick={setTitleAction}>中/英</span>
      </Header>
    );
  }
}
// const LayoutHeader2 = () => {
//   const add = (num = 1) => {
//     console.log(22222, num);
//   };
//   return (
//     <Header>
//       {/* 收缩菜单 */}
//       <MenuFoldOutlined
//         className="header-icon"
//         onClick={() => {
//           add();
//         }}/>
//       <MenuUnfoldOutlined
//         className="header-icon"
//         onClick={add.bind(this, 33)}/>
//     </Header>
//   );
// };

// const LayoutHeader3 = memo(() => {
//   const [count, setCount1] = useState(0);
//   // useMemo(() => count * 2, [count]);
//   return (
//     <div>
//       {count}
//       <button
//         onClick={() => {
//           setCount1(count => count + 1);
//         }}>
//         count+1
//       </button>
//     </div>
//   );
// });
const stateProps = state => ({
  ...state.app,
});
export default connect(stateProps, { toggleSiderBar, setTitleAction })(
  LayoutHeader
);
