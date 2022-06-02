import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Radio } from 'antd'
const initialValues = {
  username: 'ADMIN',
  password: '1234561',
  remember: true
}

const FormCom = () => {
  const [formLayout, setFormLayout] = useState('horizontal')
  const [componentSize, setComponentSize] = useState('default')
  // 提交表单且数据验证成功后回调事件
  const onFinish = values => {
    console.log('提交成功:', values)
  }

  // 提交表单且数据验证失败后回调事件
  const onFinishFailed = errorInfo => {
    console.log('提交失败:', errorInfo)
  }

  // input按下回车事件
  const onPressEnter = e => {
    console.log('onResize:', e)
  }
  // -----------
  const formItemLayout =
    formLayout !== 'inline'
      ? {
          wrapperCol: { span: 8, offset: 0 },
          labelCol: { span: 2 }
        }
      : null
  const buttonItemLayout =
    formLayout !== 'inline'
      ? {
          wrapperCol: { span: 8, offset: 2 }
        }
      : null
  //
  const RadioChange = ({ target: { value } }) => {
    setFormLayout(value)
  }
  const onFormLayoutChange = ({ target: { value } }) => {
    console.log(value)
    setComponentSize(value)
  }
  return (
    <div>
      <div>表单布局--{formLayout}</div>
      <Radio.Group value={formLayout} onChange={RadioChange}>
        <Radio.Button value='horizontal'>Horizontal</Radio.Button>
        <Radio.Button value='vertical'>Vertical</Radio.Button>
        <Radio.Button value='inline'>Inline</Radio.Button>
      </Radio.Group>
      <div>表单尺寸--{componentSize}</div>
      <Radio.Group value={componentSize} onChange={onFormLayoutChange}>
        <Radio.Button value='large'>大</Radio.Button>
        <Radio.Button value='default'>默认</Radio.Button>
        <Radio.Button value='small'>小</Radio.Button>
      </Radio.Group>

      {/* initialValues:设置表单初始值 */}
      {/* Form.Item存放多个元素会报错 */}
      <Form {...formItemLayout} layout={formLayout} name='basic' initialValues={initialValues} size={componentSize} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete='off'>
        <Form.Item label='Username' name='username' rules={[{ required: true, message: '请输入用户名!' }]}>
          <Input placeholder='请输入用户名' allowClear maxLength={10} showCount onPressEnter={onPressEnter} />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: '请输入密码!' }]}>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>
        <Form.Item label='备注' name='remark' rules={[{ required: true, message: '请输入备注!' }]}>
          <Input.TextArea placeholder='请输入备注' showCount maxLength={100} />
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Button type='primary' htmlType='submit'>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  )
}
export default FormCom
