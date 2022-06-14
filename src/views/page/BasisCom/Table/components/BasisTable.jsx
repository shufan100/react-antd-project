import React, { useState, useEffect } from 'react'
import { Table, Tooltip, Button, Collapse, Switch, Popconfirm } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

// 弹窗
import FormModal from './AlertForm'

export default function BasisTable(props) {
  const { loading } = props

  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [rows, setRows] = useState(null)
  const [tableIndex, setTableIndex] = useState(-1)
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
      name: '胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌胡彦斌',
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
      render: (text, record, index) => <span>{record.key}</span>
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name',
      width: 200,

      ellipsis: {
        //超出省略号
        showTitle: false //不显示默认提示
      },
      render: name => (
        <Tooltip placement='topLeft' title={name}>
          {name}
        </Tooltip>
      )
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age',
      width: 100,
      // defaultSortOrder: 'descend', //设置默认向下排序
      sorter: (a, b) => a.age - b.age
    },
    {
      title: '开关',
      dataIndex: 'radio',
      key: 'radio',
      width: 200,

      render: (_, record, index) => (
        <Popconfirm
          title={`确定${record.radio === 1 ? '关闭' : '打开'}-----吗？？`}
          placement='bottomRight'
          onConfirm={() => confirm(record, index)}
          okText='确定'
          cancelText='取消'
        >
          {/* <Switch checked={record.radio == 1} onClick={() => hadleSwitch(record, index)} /> */}
          <Switch checked={record.radio === 1} />
        </Popconfirm>
      )
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 100,
      ellipsis: true //超出省略号，使用默认提示
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address',
      width: 1000,
      filters: [
        {
          text: '西湖',
          value: '西湖'
        },
        {
          text: '海淀',
          value: '海淀'
        }
      ],
      onFilter: (value, record) => record.address.indexOf(value) === 0
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      fixed: 'right',
      width: 200,
      render: (_, record, index) => (
        <>
          <Button type='link' onClick={() => handleModal('查看', index, record)}>
            查看
          </Button>
          <Button type='link' onClick={() => handleModal('编辑', index, record)}>
            编辑
          </Button>
          <Popconfirm title={'确定删除吗？'} placement='top' onConfirm={() => handleDelete(record.key)} okText='确定' cancelText='取消'>
            <Button type='link'>删除</Button>
          </Popconfirm>
        </>
      )
    }
  ]
  let arr = []
  for (let i = 0; i < 20; i++) {
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
    console.log(pagination, '==')
  }, [])

  //分页、排序、筛选变化时触发
  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
    setPagination({
      ...pagination
    })
  }
  // 气泡
  const confirm = (rows, index) => {
    console.log(rows, index)
    let arr = JSON.parse(JSON.stringify(tableData))
    arr[index].radio = arr[index].radio === 1 ? 2 : 1
    setTableData(arr)
  }

  // 创建、查看、编辑弹窗
  const handleModal = (type, index, row = null) => {
    setTitle(type)
    setVisible(true)
    setRows(row)
    setTableIndex(index)
  }
  // 删除
  const handleDelete = key => {
    console.log(key)
    const newData = tableData.filter(item => item.key !== key)
    setTableData(newData)
    setPagination({
      ...pagination,
      total: newData.length
    })
  }

  // 弹窗--确定回调
  const handleOk = data => {
    console.log('弹窗--确定回调值', data)
    setVisible(false)
    if (title === '创建') {
      data.key = tableData.length + 1
      setTableData([...tableData, data])
    } else {
      data.key = tableData[tableIndex].key
      let arr = JSON.parse(JSON.stringify(tableData))
      arr[tableIndex] = data
      setTableData([...arr])
      console.log(tableData)
    }
  }
  return (
    <Collapse defaultActiveKey={['1']} ghost expandIconPosition='end'>
      <Collapse.Panel header='基础表格' key='1'>
        <Button type='primary' icon={<PlusOutlined />} onClick={() => handleModal('创建', -1)}>
          创建
        </Button>
        <Table
          dataSource={tableData}
          columns={columns}
          bordered={false}
          loading={loading}
          pagination={pagination}
          scroll={{ y: 240 }}
          title={() => '表格的标题'}
          onChange={onChange}
          //表头事件
          onHeaderRow={(columns, index) => ({
            onClick: event => {
              console.log('click')
            }, // 点击行
            onDoubleClick: event => {
              console.log('dbclick')
            },
            onContextMenu: event => {
              console.log('onContextMenu')
            },
            onMouseEnter: event => {
              console.log('onMouseEnter')
            }, // 鼠标移入行
            onMouseLeave: event => {
              console.log('onMouseLeave')
            } // 鼠标移出行
          })}
          //行事件
          onRow={record => ({
            onClick: event => {
              console.log('click')
            }, // 点击行
            onDoubleClick: event => {
              console.log('dbclick')
            },
            onContextMenu: event => {
              console.log('onContextMenu')
            },
            onMouseEnter: event => {
              console.log('onMouseEnter')
            }, // 鼠标移入行
            onMouseLeave: event => {
              console.log('onMouseLeave')
            } // 鼠标移出行
          })}
        />
        {/* 弹窗 */}
        <FormModal title={title} isModalVisible={visible} rows={rows} handleOk={handleOk} handleCancel={() => setVisible(false)} />
      </Collapse.Panel>
    </Collapse>
  )
}
