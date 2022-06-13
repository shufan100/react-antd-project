import React, { useState } from 'react'
import { Collapse, Space, Button, Menu, Dropdown, Radio } from 'antd'
import { SearchOutlined, DownloadOutlined, SettingOutlined } from '@ant-design/icons'
import { useHistory } from 'react-router-dom'
const BasisStyle = {
  padding: 0,
  background: '#f0f2f5'
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
  const [size, setSize] = useState('large') //按钮尺寸：large  default small
  const [spaceSize] = useState(20) //间距：large  default small（还可以设数值）
  const history = useHistory()
  console.log(history)
  return (
    <div style={BasisStyle}>
      <h2 style={{ fontWeight: 'bold', padding: '10px', marginBottom: '15px', background: '#fff' }}>Button组件示例</h2>
      {/* <Button onClick={() => history.push('/basisCom/form')}>111</Button> */}

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='基础按钮' key='1' extra={<SettingOutlined />}>
          <Space size={spaceSize}>
            <Button type='primary'>主按钮</Button>
            <Button>默认按钮</Button>
            <Button type='danger'>危险按钮</Button>
            <Button type='dashed'>虚线按钮</Button>
            <Button type='text'>文本按钮</Button>
            <Button type='link'>链接按钮</Button>
            <Button type='primary' disabled>
              禁用按钮
            </Button>
            <Button danger>危险按钮</Button>
            <Dropdown.Button overlay={menu}>多选按钮</Dropdown.Button>
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='幽灵按钮（内容反色，背景变为透明）' key='1' extra={<SettingOutlined />}>
          <Space size={spaceSize} style={{ background: '#ccc' }}>
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
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='按钮尺寸（large大、default默认、small小尺寸）' key='1' extra={<SettingOutlined />}>
          <Radio.Group value={size} onChange={e => setSize(e.target.value)}>
            <Radio.Button value='large'>大</Radio.Button>
            <Radio.Button value='default'>中默认</Radio.Button>
            <Radio.Button value='small'>小</Radio.Button>
          </Radio.Group>
          <br />
          <br />
          <Space size={spaceSize}>
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
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='图标按钮' key='1' extra={<SettingOutlined />}>
          <Space size={spaceSize}>
            <Button type='primary' icon={<SearchOutlined />}>
              搜索
            </Button>
            <Button type='primary' icon={<DownloadOutlined />}>
              下载
            </Button>
            <Button type='primary' loading>
              Loading
            </Button>
          </Space>
        </Collapse.Panel>
      </Collapse>

      <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
        <Collapse.Panel header='Block 按钮（使按钮适合其父宽度）' key='1' extra={<SettingOutlined />}>
          <p>
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
          </p>
        </Collapse.Panel>
      </Collapse>
    </div>
  )
}
