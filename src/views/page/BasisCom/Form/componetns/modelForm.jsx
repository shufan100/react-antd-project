/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-06-25 18:02:25
 * @FilePath: \react-antd-project\src\views\page\BasisCom\Form\componetns\modelForm.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import { Modal, Form, Input, Radio } from 'antd'

const ModelForm = ({ visible, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  return (
    <Modal
      open={visible}
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
