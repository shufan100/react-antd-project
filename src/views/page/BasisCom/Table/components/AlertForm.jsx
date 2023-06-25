/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-06-25 17:45:46
 * @FilePath: \react-antd-project\src\views\page\BasisCom\Table\components\AlertForm.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useEffect } from 'react'
import { Form, Modal, Button, Input, Radio } from 'antd'

// 表单初始值
const initialValues = {
  radio: 1
}

export default function AlertForm({ title, isModalVisible, rows, handleOk, handleCancel }) {
  const [form] = Form.useForm()

  //确定
  const onOk = val => {
    form
      .validateFields()
      .then(values => {
        form.resetFields()
        handleOk(values)
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }
  const onCancel = () => {
    form.resetFields()
    handleCancel()
  }
  const footers =
    title === '查看'
      ? null
      : [
          <Button key='cancel' onClick={handleCancel}>
            取消
          </Button>,
          <Button key='submit' type='primary' onClick={onOk}>
            确定
          </Button>
        ]

  //
  useEffect(() => {
    if (isModalVisible) {
      console.log(rows, isModalVisible, 'rows----------')
      form.setFieldsValue(rows)
    }
  }, [isModalVisible]) // eslint-disable-line

  return (
    // onCancel: 取消按钮 和 X  onOk：确定
    <Modal forceRender width={500} title={title} visible={isModalVisible} footer={footers} onOk={onOk} onCancel={onCancel}>
      <Form form={form} layout='vertical' initialValues={initialValues} disabled={title === '查看'}>
        <Form.Item name='name' label='姓名' rules={[{ required: true, message: '请输入姓名!' }]}>
          <Input placeholder='请输入姓名' />
        </Form.Item>
        <Form.Item name='age' label='年龄'>
          <Input placeholder='请输入年龄' />
        </Form.Item>
        <Form.Item name='address' label='地址'>
          <Input type='textarea' placeholder='请输入地址' />
        </Form.Item>
        <Form.Item name='radio'>
          <Radio.Group>
            <Radio value={1}>开</Radio>
            <Radio value={2}>关</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}
