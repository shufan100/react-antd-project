import React, { useState, useEffect } from 'react'
import { Table, Collapse, Divider, Radio, Button, Space } from 'antd'

// 弹窗

export default function SelectTable({ loading }) {
  const [selectionType, setSelectionType] = useState('checkbox')
  const [selectedRowKeys, setSelectedRowKeys] = useState([1])
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
    showSizeChanger: true, //显示条数
    pageSizeOptions: [10, 20, 50, 100, 1000]
  })
  // 数据
  const [tableData, setTableData] = useState([
    {
      key: 1,
      name: '胡彦斌',
      age: 30,
      radio: 1,
      address: '西湖区湖底公园1号'
    },
    {
      key: 2,
      name: '胡彦祖',
      age: 42,
      radio: 2,
      address: '西龙区湖底公园2号'
    }
  ])
  // 表格格式
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index1',
      width: 60,
      align: 'center',
      render: (text, record, index) => <span>{index + 1}</span>
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      // defaultSortOrder: 'descend', //设置默认向下排序
      sorter: (a, b) => a.age - b.age
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    }
  ]
  let arr = []
  for (let i = 0; i < 50; i++) {
    arr.push({
      key: i + 3,
      name: `Edward King ${i + 3}`,
      age: 32,
      radio: 2,
      address: `海淀区湖底公园${i + 3}号`
    })
  }

  useEffect(() => {
    setTableData([...tableData, ...arr])

    setPagination({
      ...pagination,
      total: [...tableData, ...arr].length
    })
  }, [])

  //分页、排序、筛选变化时触发
  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
    setPagination({
      ...pagination
    })
  }
  const selectTableAll = () => {
    const arr = tableData.map(i => (i.name !== '胡彦祖' ? i.key : false))
    setSelectedRowKeys(arr)
  }

  const rowSelection = {
    type: selectionType, //单 、 多选
    selectedRowKeys, // 默认选择
    selections: [Table.SELECTION_ALL, Table.SELECTION_INVERT, Table.SELECTION_NONE],
    onChange: (selectedRowKeys, selectedRows) => {
      console.log(`选择的key: ${selectedRowKeys}`, '选择的表格数据: ', selectedRows)
      console.log('selectedRowKeys changed: ', selectedRowKeys)
      setSelectedRowKeys(selectedRowKeys)
    },
    getCheckboxProps: record => ({
      disabled: record.name === '胡彦祖',
      // Column configuration not to be checked
      name: record.name
    })
  }

  return (
    <Collapse defaultActiveKey={['0']} ghost expandIconPosition='end'>
      <Collapse.Panel header='单/双选表格' key='1'>
        <Radio.Group
          onChange={({ target: { value } }) => {
            setSelectionType(value)
          }}
          value={selectionType}
        >
          <Radio value='checkbox'>多选</Radio>
          <Radio value='radio'>单选</Radio>
        </Radio.Group>

        <Space size='small'>
          <Button type='primary' onClick={() => selectTableAll()}>
            全选
          </Button>
          <Button onClick={() => setSelectedRowKeys([])}>重置</Button>
        </Space>

        <Divider />
        <Table
          rowSelection={rowSelection}
          dataSource={tableData}
          columns={columns}
          bordered
          loading={loading}
          pagination={pagination}
          scroll={{ y: 240 }}
          title={() => '注：表格选择一些事件'}
          onChange={onChange}
        />
      </Collapse.Panel>
    </Collapse>
  )
}
