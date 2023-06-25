import { DownOutlined } from '@ant-design/icons'
import { Badge, Dropdown, Menu, Space, Table, Collapse } from 'antd'
const menu = (
  <Menu
    items={[
      {
        key: '1',
        label: 'Action 1'
      },
      {
        key: '2',
        label: 'Action 2'
      }
    ]}
  />
)
const style = {
  color: '#2858f8'
}

const NestedTable = ({ loading }) => {
  const expandedRowRender = () => {
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date'
      },
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name'
      },
      {
        title: 'Status',
        key: 'state',
        render: () => (
          <span>
            <Badge status='success' />
            Finished
          </span>
        )
      },
      {
        title: 'Upgrade Status',
        dataIndex: 'upgradeNum',
        key: 'upgradeNum'
      },
      {
        title: 'Action',
        dataIndex: 'operation',
        key: 'operation',
        render: () => (
          <Space size='middle'>
            <span style={style}>Pause</span>
            <span style={style}>Stop</span>
            <Dropdown menu={menu}>
              <span style={style}>
                More <DownOutlined />
              </span>
            </Dropdown>
          </Space>
        )
      }
    ]
    const data = []

    for (let i = 0; i < 3; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56'
      })
    }

    return <Table columns={columns} dataSource={data} pagination={false} />
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: 'Platform',
      dataIndex: 'platform',
      key: 'platform'
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version'
    },
    {
      title: 'Upgraded',
      dataIndex: 'upgradeNum',
      key: 'upgradeNum'
    },
    {
      title: 'Creator',
      dataIndex: 'creator',
      key: 'creator'
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt'
    },
    {
      title: 'Action',
      key: 'operation',
      render: () => <span style={style}>Publish</span>
    }
  ]
  const data = []

  for (let i = 0; i < 3; ++i) {
    data.push({
      key: i,
      name: 'Screem',
      platform: 'iOS',
      version: '10.3.4.5654',
      upgradeNum: 500,
      creator: 'Jack',
      createdAt: '2014-12-24 23:12:00'
    })
  }

  return (
    <Collapse defaultActiveKey={['0']} ghost expandIconPosition='end'>
      <Collapse.Panel header='嵌套子表格' key='1'>
        <Table
          className='components-table-demo-nested'
          loading={loading}
          columns={columns}
          expandable={{
            //嵌套子表格
            expandedRowRender
          }}
          dataSource={data}
        />
      </Collapse.Panel>
    </Collapse>
  )
}

export default NestedTable
