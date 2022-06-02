import React, { useState, useRef } from 'react'
import './index.less'
import { Input, Select, Space, Cascader, Divider, Button } from 'antd'
import { SettingOutlined, ClockCircleOutlined, UserOutlined, CopyOutlined, EyeTwoTone, EyeInvisibleOutlined, AudioOutlined } from '@ant-design/icons'
import NumericInput from '@/components/NumericInput'
const { Option } = Select
const { TextArea } = Input
const selectBefore = (
  <Select defaultValue='http://' className='select-before'>
    <Option value='http://'>http://</Option>
    <Option value='https://'>https://</Option>
  </Select>
)
const selectAfter = (
  <Select defaultValue='.com' className='select-after'>
    <Option value='.com'>.com</Option>
    <Option value='.jp'>.jp</Option>
    <Option value='.cn'>.cn</Option>
    <Option value='.org'>.org</Option>
  </Select>
)

const Inputs = () => {
  const [value, setValue] = useState('')
  const inputRef = useRef(null)
  const onSearch = val => {
    alert(val)
  }
  const frist = () => {
    inputRef.current.focus({
      cursor: 'start'
    })
  }
  const last = () => {
    inputRef.current.focus({
      cursor: 'end'
    })
  }
  const selectAll = () => {
    inputRef.current.focus({
      cursor: 'all'
    })
  }
  const preventScroll = () => {
    inputRef.current.focus({
      preventScroll: true
    })
  }
  const blur = e => {
    console.log(e.target.value)
  }
  const onChange = e => {
    console.log(e.target.value)
  }
  const onPressEnter = e => {
    console.log(e.target.value)
  }

  return (
    <div id='inputs'>
      <div>输入框状态</div>
      <Space size={15}>
        <Input placeholder='默认' status='info' />
        <Input placeholder='警告' status='warning' />
        <Input placeholder='失败' status='error' />
        <Input placeholder='禁用' disabled />
      </Space>
      <div>尺寸</div>
      <Space size={15}>
        <Input placeholder='large - 40' size='large' />
        <Input placeholder='default - 32' />
        <Input placeholder='small - 24' size='small' />
      </Space>
      <div>输入框基础属性</div>
      <Space size={15}>
        <Input defaultValue='默认内容' />
        <Input placeholder='最大长度 + 展示字数' maxLength={100} showCount />
        <Input defaultValue='清空按钮' allowClear />
      </Space>
      <div>图标</div>
      <Space size={15}>
        <Input status='warning' prefix={<UserOutlined />} />
        <Input status='warning' prefix={<ClockCircleOutlined />} />
        <Input status='warning' suffix={<CopyOutlined />} />
        <Input status='warning' prefix='￥' suffix='元' />
        <Input addonAfter={<SettingOutlined />} defaultValue='1' />
      </Space>
      <div>前置/后置标签</div>
      <Space>
        <Input addonBefore='http://' addonAfter='.com' defaultValue='1' />
        <Input addonBefore={selectBefore} addonAfter={selectAfter} defaultValue='1' />
        <Input addonAfter={<SettingOutlined />} defaultValue='1' />
        <Input addonBefore='http://' suffix='.com' defaultValue='1' />
        <Input addonBefore={<Cascader placeholder='cascader' style={{ width: 150 }} />} defaultValue='1' />
      </Space>
      <div>输入框--密码和文本</div>
      <Space size={15}>
        <Input.Password placeholder='密码输入框' />
        <Input.Password placeholder='密码输入框' iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
        <TextArea rows={2} placeholder='文本域' />
        <TextArea rows={2} placeholder='文本域+最大6行' maxLength={6} />
      </Space>
      <div>输入框--搜索</div>
      <Space size={15}>
        <Input.Search placeholder='搜索' />
        <Input.Search placeholder='input search text' enterButton suffix={<AudioOutlined />} />
        <Input.Search placeholder='input search text' enterButton />
        <Input.Search placeholder='搜索+loading' loading />
        <Input.Search placeholder='input search text' enterButton loading />
        <Input.Search placeholder='input search text' enterButton='Search' loading />
      </Space>
      <div>输入框--只能输入数字</div>
      <Space size={15}>
        {value}
        <NumericInput style={{ width: 240 }} value={value} onChange={setValue} />
      </Space>
      {/* ---------------------------------------------------------------------------------------------------------------------- */}
      <Divider orientation='conter' orientationMargin={100} dashed>
        ***输入框事件***
      </Divider>
      <Space size={15} direction='vertical'>
        <Input.Search placeholder='清除事件' defaultValue='111' allowClear onSearch={onSearch} />
        <Input placeholder='失焦事件' onBlur={blur} />
        <Input placeholder='input事件' onInput={blur} />
        <Input placeholder='change事件' onChange={onChange} />
        <Input placeholder='回车事件' onPressEnter={onPressEnter} />
        <Input.Search ref={inputRef} placeholder='聚焦第一个' defaultValue='初始值' enterButton='search' onSearch={onSearch} />
        <div>
          <Button onClick={frist}>聚焦第一个</Button>&nbsp;
          <Button onClick={last}>聚焦最后一个</Button>&nbsp;
          <Button onClick={selectAll}>全部选中</Button>&nbsp;
          <Button onClick={preventScroll}>Focus prevent scroll</Button>&nbsp;
        </div>
        <Input ref={inputRef} defaultValue='初始值' />
      </Space>
    </div>
  )
}

export default Inputs
