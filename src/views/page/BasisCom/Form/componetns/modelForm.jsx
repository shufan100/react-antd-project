import React from 'react'
import { Modal, Form, Input, Radio } from 'antd'

const ModelForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      visible={visible}
      title='弹窗'
      okText='Create'
      cancelText='Cancel'
      onCancel={onCancel}
      onOk={() => {
        form
          .validateFields()
          .then(values => {
            form.resetFields()
            onCreate(values)
          })
          .catch(info => {
            console.log('Validate Failed:', info)
          })
      }}
    >
      <Form form={form} layout='vertical' name='form_in_modal' initialValues={{ modifier: 'public' }}>
        <Form.Item name='title' label='标题' rules={[{ required: true, message: '请输入标题!' }]}>
          <Input />
        </Form.Item>
        <Form.Item name='description' label='描述'>
          <Input type='textarea' />
        </Form.Item>
        <Form.Item name='modifier' className='collection-create-form_last-form-item'>
          <Radio.Group>
            <Radio value='public'>Public</Radio>
            <Radio value='private'>Private</Radio>
          </Radio.Group>
        </Form.Item>
      </Form>
    </Modal>
  )
}
export default ModelForm
