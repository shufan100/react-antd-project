/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-02-22 17:51:39
 * @FilePath: \react-antd-project\src\views\login\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button, message } from 'antd';
import { connect } from 'react-redux';
import store from '@/store';
import { setTokenAction } from '@/store/actions';
import './index.less';

const LayoutLogin = props => {
  // 提交表单且数据验证成功后回调事件
  const onFinish = (values) => {
    console.log('Success:', values);
    if (values.username1 === 'admin' || values.username1 === 'editor' || values.username1 === 'guest') {
      store.dispatch(setTokenAction(values.username1));
      message.success('登录成功！');

    } else return message.error('登录失败！');
  };
  // 表单校验回调
  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  if (props.token) {
    return <Redirect to="/" />;
  }
  return (
    <div className='login-container' >
      <Form
        className="content"
        name="basic"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off">
        <Form.Item name="username1" rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input />
        </Form.Item>

        <Form.Item name="password1" rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
          <Button className="login-form-button" type="primary" htmlType="submit">登录</Button>
        </Form.Item>
        <Form.Item>
          <div>{props.token}</div>
          <span>账号 : admin 密码 : 随便填</span>
          <br />
          <span>账号 : editor 密码 : 随便填</span>
          <br />
          <span>账号 : guest 密码 : 随便填</span>
        </Form.Item>
      </Form>
    </div>
  );
};
export default connect(state => state.user)(LayoutLogin);