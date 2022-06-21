import React, { useState } from 'react'
import { Collapse, Button, Space, message, notification, Modal } from 'antd'

export default function Messages() {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const openMessage = type => {
    message[type](`This is a ${type} message`)
  }
  const openNotification = type => {
    notification[type]({
      message: 'Notification Title',
      description: 'This is the content of the notification. This is the content of the notification. This is the content of the notification.'
    })
  }
  const openModel = type => {
    Modal[type]({
      title: 'This is a warning message',
      content: 'some messages...some messages...'
    })
  }
  return (
    <div>
      <h2 className='h2Style'>Message组件示例</h2>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='message提示' key='1'>
          <Space>
            <Button onClick={() => openMessage('success')}>Success</Button>
            <Button onClick={() => openMessage('info')}>Info</Button>
            <Button onClick={() => openMessage('warning')}>Warning</Button>
            <Button onClick={() => openMessage('error')}>Error</Button>
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='notification提示' key='1'>
          <Space>
            <Button onClick={() => openNotification('success')}>Success</Button>
            <Button onClick={() => openNotification('info')}>Info</Button>
            <Button onClick={() => openNotification('warning')}>Warning</Button>
            <Button onClick={() => openNotification('error')}>Error</Button>
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='Modal提示' key='1'>
          <Space>
            <Button onClick={() => openModel('success')}>Success</Button>
            <Button onClick={() => openModel('info')}>Info</Button>
            <Button onClick={() => openModel('warning')}>Warning</Button>
            <Button onClick={() => openModel('error')}>Error</Button>
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='对话框' key='1'>
          <Button type='primary' onClick={() => setIsModalVisible(true)}>
            Open Modal
          </Button>
        </Collapse.Panel>
      </Collapse>

      <Modal title='Modal弹窗' visible={isModalVisible} onOk={() => setIsModalVisible(false)} onCancel={() => setIsModalVisible(false)}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    </div>
  )
}
