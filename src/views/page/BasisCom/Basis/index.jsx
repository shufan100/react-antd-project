import React from 'react'
import { Divider, Button } from 'antd'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
const BasisStyle = {
  // background: 'red'
}

export default function Basis() {
  return (
    <div style={BasisStyle}>
      <Divider>基础按钮</Divider>&nbsp;
      <Button type='primary'>主按钮</Button>&nbsp;
      <Button>次按钮</Button>&nbsp;
      <Button type='dashed'>虚线按钮</Button>&nbsp;
      <Button type='text'>文本按钮</Button>&nbsp;
      <Button type='link'>链接按钮</Button>
      <Divider>图表按钮</Divider>
      <Button type='primary' icon={<SearchOutlined />}>
        搜索
      </Button>
      &nbsp;
      <Button type='primary' icon={<DownloadOutlined />}>
        下载
      </Button>
    </div>
  )
}
