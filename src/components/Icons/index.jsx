// 
/**动态icon组件
 * 可自定义属性
 * 可定义方法
 */
import React, { useEffect } from 'react';
import * as IconItem from '@ant-design/icons'; //引入所有icon
import { PropTypes } from 'prop-types';
import { Tooltip } from 'antd';
import './index.less';
const Icons = props => {
  // 函数式仿生命周期
  useEffect(() =>
    // 组件加载完走
    // console.log('props', props);
    () => {
      // 卸载组件前走
    }
    , []);
  // 动态创建icon虚拟dom
  const getMenuIcon = (icontype) => icontype && IconItem[icontype] ? React.createElement(IconItem[icontype]) : '';
  const { iconName, color, size, top, bottom, left, right, toolTitle, click } = props;
  return (
    <Tooltip placement="bottom" title={toolTitle}>
      <span className={`${iconName} icons`} style={{ color, fontSize: size, top, bottom, left, right }} onClick={click}>
        {getMenuIcon(props.iconName)}
      </span>
    </Tooltip>
  );
};
export default Icons;

// 初始化props
Icons.propTypes = {

};
// 校验props类型;
Icons.propTypes = {
  iconName: PropTypes.string.isRequired, //icon类型  必传：isRequired
  color: PropTypes.string, // 颜色
  size: PropTypes.number, // 大小
  top: PropTypes.number,
  bottom: PropTypes.number,
  left: PropTypes.number,
  right: PropTypes.number,
  toolTitle: PropTypes.string, //文字提示
  click: PropTypes.func //函数校验
};
// 设置props默认值
Icons.defaultProps = {
  iconName: '',
  size: 14,
  top: 0,
  bottom: 0,
  left: 0,
  right: 0
};