import React, { useState } from 'react'
import { Divider, Button, Menu, Dropdown, Radio } from 'antd'
import { SearchOutlined, DownloadOutlined } from '@ant-design/icons'
const BasisStyle = {
  // background: 'red'
}
const onMenuClick = e => {
  console.log('click', e)
}

const menu = (
  <Menu
    onClick={onMenuClick}
    items={[
      {
        key: '1',
        label: '1st item'
      },
      {
        key: '2',
        label: '2nd item'
      },
      {
        key: '3',
        label: '3rd item'
      }
    ]}
  />
)
export default function Basis() {
  const [size, setSize] = useState('large')
  return (
    <div style={BasisStyle}>
      <Divider>基础按钮</Divider>&nbsp;
      <Button type='primary'>主按钮</Button>&nbsp;
      <Button>次按钮</Button>&nbsp;
      <Button type='dashed'>虚线按钮</Button>&nbsp;
      <Button type='text'>文本按钮</Button>&nbsp;
      <Button type='link'>链接按钮</Button>&nbsp;
      <Button type='primary' disabled>
        警用按钮
      </Button>
      &nbsp;
      <Button danger>危险按钮</Button>&nbsp;
      <Dropdown.Button overlay={menu}>Actions</Dropdown.Button>
      {/*  */}
      <Divider>按钮状态（primary | ghost | dashed | link | text | default）</Divider>
      <Button type='primary'> Primary </Button>&nbsp;
      <Button type='ghost'> ghost </Button>&nbsp;
      <Button type='dashed'> dashed </Button>&nbsp;
      <Button type='link'> link </Button>&nbsp;
      <Button type='text'> text </Button>&nbsp;
      <Button type='default'> default </Button>&nbsp;
      {/*  */}
      <Divider>按钮尺寸（尺寸分别为大、小尺寸。若不设置 size，则尺寸为中）</Divider>
      <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
        <Radio.Button value='large'>大</Radio.Button>
        <Radio.Button value='default'>中默认</Radio.Button>
        <Radio.Button value='small'>小</Radio.Button>
      </Radio.Group>
      <br />
      <br />
      <Button type='primary' size={size}>
        Primary
      </Button>
      <Button size={size}>Default</Button>
      <Button type='dashed' size={size}>
        Dashed
      </Button>
      <Button type='link' size={size}>
        Link
      </Button>
      <Button type='primary' icon={<DownloadOutlined />} size={size} />
      <Button type='primary' shape='circle' icon={<DownloadOutlined />} size={size} />
      <Button type='primary' shape='round' icon={<DownloadOutlined />} size={size} />
      <Button type='primary' shape='round' icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
      <Button type='primary' icon={<DownloadOutlined />} size={size}>
        Download
      </Button>
      {/*  */}
      <Divider>图标按钮</Divider>
      <Button type='primary' icon={<SearchOutlined />}>
        搜索
      </Button>
      &nbsp;
      <Button type='primary' icon={<DownloadOutlined />}>
        下载
      </Button>
      &nbsp;
      <Button type='primary' loading>
        Loading
      </Button>
      {/*  */}
      <Divider>幽灵按钮（内容反色，背景变为透明）</Divider>
      <div style={{ background: '#ccc', padding: '10px 0' }}>
        <Button type='primary' ghost>
          幽灵主要
        </Button>
        &nbsp;
        <Button ghost>幽灵默认</Button>&nbsp;
        <Button type='dashed' ghost>
          幽灵Dashed
        </Button>
        &nbsp;
        <Button type='primary' danger ghost>
          幽灵危险
        </Button>
      </div>
      {/*  */}
      <Divider>Block 按钮（使按钮适合其父宽度）</Divider>
      <Button type='primary' block>
        Primary
      </Button>
      <Button block>Default</Button>
      <Button type='dashed' block>
        Dashed
      </Button>
      <Button type='link' block>
        Link
      </Button>
    </div>
  )
}
