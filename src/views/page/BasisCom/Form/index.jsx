import React, { useState } from 'react'
import { Form, Input, Button, Checkbox, Radio, Select, Typography, DatePicker, Message, Upload } from 'antd'
import { InfoCircleOutlined, UploadOutlined } from '@ant-design/icons'
import ModelForm from './componetns/modelForm'
import moment from 'moment'
const { RangePicker } = DatePicker
const { Option } = Select
// form表单初始值
const initialValues = {
  username: '',
  password: '',
  remember: false,
  'radio-group': '2'
}
// 自定义校验规则
const validateMessages = {
  required: '${label} 是必选字段!!!' //有校验但没写msg就走这个提示
}
const rangeConfig = {
  rules: [
    {
      type: 'array',
      required: true,
      message: '请选择时间!'
    }
  ]
}
const normFile = e => {
  console.log('Upload event:', e)

  if (Array.isArray(e)) {
    return e
  }

  return e?.fileList
}
// -----日期限制------
const range = (start, end) => {
  const result = []
  for (let i = start; i < end; i++) {
    result.push(i)
  }
  return result
} // eslint-disable-next-line arrow-body-style
const disabledDate = current => {
  // 今天之前和今天不能选择
  return current && current < moment().endOf('day')
}

const disabledRangeTime = (_, type) => {
  if (type === 'start') {
    //开始日期(限制)
    return {
      disabledHours: () => range(0, 8), //时：1-7小时不能选
      disabledMinutes: () => range(40, 60), //分：40-59分不能选
      disabledSeconds: () => [55, 56, 57, 58, 59, 0] //秒：55, 56, 57, 58, 59, 60秒不能选
    }
  }
  // 结束日期(限制)
  return {
    disabledHours: () => range(1, 10),
    disabledMinutes: () => range(0, 31),
    disabledSeconds: () => [55, 56]
  }
}

const FormCom = () => {
  const [form] = Form.useForm() //1函数组件用useForm 2类组件用ref：formRef = React.createRef();
  const [formLayout, setFormLayout] = useState('horizontal')
  const [componentSize, setComponentSize] = useState('default')
  const [requiredMark, setRequiredMarkType] = useState('Required')
  const nameValue = Form.useWatch('username', form) //监听username变化

  // 函数组件写法
  const onGenderChange = value => {
    console.log(value)
    console.log(form.getFieldValue(), form.getFieldValue('select'), '-----')
    switch (value) {
      case 'male':
        form.setFieldsValue({
          username: 'Hi, man!'
        })
        return

      case 'female':
        form.setFieldsValue({
          username: 'Hi, lady!'
        })
        return

      case 'other':
        form.setFieldsValue({
          username: 'Hi there!'
        })
    }
  }
  // 类式组件写法
  // formRef = React.createRef()
  // onGenderChange = value => {
  //   switch (value) {
  //     case 'male':
  //       this.formRef.current.setFieldsValue({
  //         username: 'Hi, man!'
  //       })
  //       return

  //     case 'female':
  //       this.formRef.current.setFieldsValue({
  //         username: 'Hi, lady!'
  //       })
  //       return

  //     case 'other':
  //       this.formRef.current.setFieldsValue({
  //         username: 'Hi there!'
  //       })
  //   }
  // }
  // -------------------
  // 提交表单且数据验证成功后回调事件

  const onFinish = values => {
    console.log('提交成功:', values)
    const rangeTimeValue = values['range-time-picker']
    const fieldsValue = {
      ...values,
      // 时间类组件的 value 类型为 moment 对象，所以在提交服务器前需要预处理
      'range-time-picker': [rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'), rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')]
    }
    console.log(fieldsValue)
    Message.success('提交成功')
  }

  // 提交表单且数据验证失败后回调事件
  const onFinishFailed = errorInfo => {
    console.log('提交失败:', errorInfo)
    Message.error('提交失败')
  }
  // 重置
  const onReset = () => {
    form.resetFields()
  }
  // 填充
  const onFill = () => {
    form.setFieldsValue({
      username: 'edit',
      password: 'q123456',
      remark: '备注11',
      select: 'other',
      'select-multiple': ['red', 'Blue'],
      remember: true,
      url: 'https://taobao.com/',
      year: '1995',
      month: '11',
      day: '08',
      'range-time-picker': [moment().startOf('month'), moment().endOf('month')]
    })
  }

  // -----------
  const formItemLayout =
    formLayout !== 'inline'
      ? {
          wrapperCol: { span: 10, offset: 0 },
          labelCol: { span: 1 }
        }
      : null
  const buttonItemLayout =
    formLayout !== 'inline'
      ? {
          wrapperCol: { span: 10, offset: 2 }
        }
      : null
  const RadioChange = ({ target: { value } }) => {
    setFormLayout(value)
  }
  const onFormLayoutChange = ({ target: { value } }) => {
    setComponentSize(value)
  }
  const onRequiredTypeChange = ({ target: { value } }) => {
    setRequiredMarkType(value)
  }
  // -------弹窗事件
  const [visible, setVisible] = useState(false)
  const onCreate = values => {
    console.log('弹窗回调: ', values)
    setVisible(false)
  }

  return (
    <div>
      <span>表单布局--{formLayout} </span>
      <Radio.Group value={formLayout} onChange={RadioChange}>
        <Radio.Button value='horizontal'>Horizontal</Radio.Button>
        <Radio.Button value='vertical'>Vertical</Radio.Button>
        <Radio.Button value='inline'>Inline</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <span>表单尺寸--{componentSize} </span>
      <Radio.Group value={componentSize} onChange={onFormLayoutChange}>
        <Radio.Button value='large'>大</Radio.Button>
        <Radio.Button value='default'>默认</Radio.Button>
        <Radio.Button value='small'>小</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <span>表单必选和可选样式--{requiredMark} </span>
      <Radio.Group value={requiredMark} onChange={onRequiredTypeChange}>
        <Radio.Button value='optional'>Optional</Radio.Button>
        <Radio.Button value='Required'>Required</Radio.Button>
        <Radio.Button value={false}>Hidden</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Typography>
        <pre>监听form表单Username的最新值: {nameValue}</pre>
      </Typography>
      <Form
        name='basic' //会作为表单字段 id 前缀使用
        form={form} // Form.useForm()
        initialValues={initialValues} //表单初始值
        {...formItemLayout} //布局（label和input的宽度）
        layout={formLayout} //表单布局 （horizontal、vertical、inline）
        size={componentSize} //表单尺寸（large、default、small）
        requiredMark={requiredMark} //通过 requiredMark 切换必选与可选样式（optional(文字)、Required(星星)、false(无)）
        validateMessages={validateMessages}
        onFinish={onFinish} //表单提交成功触发
        onFinishFailed={onFinishFailed} //表单提交失败触发
        autoComplete='off'
        colon //是否显示label后面的冒号（默认true）
        labelAlign='right' //label 文本对齐方式（left、right）默认''
        labelCol={{ flex: formLayout == 'vertical' ? '30px' : '100px' }} //label 标签布局
        labelWrap //label (文本)换行方式（left、right）默认right
      >
        {/* 自定义校验:
            validateStatus: 校验状态，可选 'success', 'warning', 'error', 'validating'。
            hasFeedback：用于给输入框添加反馈图标 
            help：提示信息，如不设置，则会根据校验规则自动生成 
        */}
        <Form.Item label='Username' name='username' rules={[{ required: true, message: '请输入用户名!' }]} hasFeedback>
          <Input placeholder='请输入用户名' allowClear maxLength={10} showCount />
        </Form.Item>
        <Form.Item label='Password' name='password' rules={[{ required: true, message: '请输入密码!' }]} help='Should be combination of numbers '>
          <Input.Password placeholder='请输入密码' />
        </Form.Item>
        <Form.Item label='备注备注备注备注' name='remark' rules={[{ required: true, message: '请输入备注!' }]} hasFeedback validateStatus='warning'>
          <Input.TextArea placeholder='请输入备注' showCount maxLength={100} />
        </Form.Item>
        <Form.Item name='radio-group' label='Radio.Group'>
          <Radio.Group>
            <Radio value='1'>item 1</Radio>
            <Radio value='2'>item 2</Radio>
            <Radio value='3'>item 3</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item label='Select' name='select' tooltip={{ title: '不必填字段', icon: <InfoCircleOutlined /> }}>
          <Select placeholder='请选择' onChange={onGenderChange} allowClear>
            <Select.Option value='male'>male</Select.Option>
            <Select.Option value='female'>female</Select.Option>
            <Select.Option value='other'>other</Select.Option>
          </Select>
        </Form.Item>
        {/* 根据 select的值显示隐藏*/}
        <Form.Item noStyle shouldUpdate={(prevValues, currentValues) => prevValues.select !== currentValues.select}>
          {({ getFieldValue }) =>
            getFieldValue('select') === 'other' ? (
              <Form.Item name='customize' label='customize' rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            ) : null
          }
        </Form.Item>
        <Form.Item name='select-multiple' label='Select多选'>
          <Select mode='multiple' placeholder='请选择'>
            <Option value='red'>Red</Option>
            <Option value='green'>Green</Option>
            <Option value='blue'>Blue</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name='url'
          label='URL'
          rules={[
            { required: true },
            { type: 'url', warningOnly: true, message: 'URL不是一个有效的url' },
            { type: 'string', min: 6, message: 'URL最少6个字符' }
          ]}
        >
          <Input placeholder='请输入URL' />
        </Form.Item>
        <Form.Item label='生日' style={{ marginBottom: 0 }} required>
          <Form.Item name='year' rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(33% - 6px)' }}>
            <Input placeholder='年' />
          </Form.Item>
          <Form.Item name='month' rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(33% - 6px)', margin: '0 8px' }}>
            <Input placeholder='月' />
          </Form.Item>
          <Form.Item name='day' rules={[{ required: true }]} style={{ display: 'inline-block', width: 'calc(33% - 0px)' }}>
            <Input placeholder='日' />
          </Form.Item>
        </Form.Item>
        <Form.Item name='range-time-picker' label='日期(时间)' {...rangeConfig}>
          <RangePicker
            defaultValue={[moment('2022-06-07', 'YYYY-MM-DD'), '']} //默认值
            showTime //增加时间选择功能
            format='YYYY-MM-DD HH:mm:ss' //日期格式
            disabledDate={disabledDate} //禁用日期
            disabledTime={disabledRangeTime} //禁用时分秒
            ranges={{
              '今-天': [moment(), moment()], //快捷键
              '当-月': [moment().startOf('month'), moment().endOf('month')],
              '本-年': [moment().startOf('year'), moment().endOf('year')]
            }}
            disabled={[true, false]}
          />
        </Form.Item>
        <Form.Item name='upload' label='Upload' valuePropName='fileList' getValueFromEvent={normFile} extra='longgggggggggggggggggggggggggggggggggg'>
          <Upload name='logo' action='/upload.do' listType='picture'>
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item {...buttonItemLayout}>
          <Form.Item name='remember' valuePropName='checked'>
            <Checkbox>记住密码</Checkbox>
          </Form.Item>
          <Button type='primary' htmlType='submit'>
            提交
          </Button>
          <Button htmlType='button' onClick={onReset}>
            重置
          </Button>
          <Button htmlType='button' onClick={onFill}>
            填充表单
          </Button>
          <Button
            type='primary'
            onClick={() => {
              setVisible(true)
            }}
          >
            表单弹窗
          </Button>
        </Form.Item>
      </Form>

      {/* 弹窗00000000000 */}
      <ModelForm
        visible={visible}
        onCreate={onCreate}
        onCancel={() => {
          setVisible(false)
        }}
      />
    </div>
  )
}
export default FormCom
