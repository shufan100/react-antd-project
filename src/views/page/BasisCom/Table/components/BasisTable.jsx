import React, { useState, useEffect } from 'react'
import { Table, Button, Collapse, Switch, Popconfirm, message } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

// 弹窗
import FormModal from './AlertForm'

export default function BasisTable(props) {
  // 数据
  const [tableData, setTableData] = useState([
    {
      key: '1',
      name: '胡彦斌',
      age: 30,
      radio: 1,
      address: '西湖区湖底公园1号'
    },
    {
      key: '2',
      name: '胡彦祖',
      age: 42,
      radio: 2,
      address: '西湖区湖底公园2号'
    }
  ])

  useEffect(() => {
    let arr = []
    for (let i = 0; i < 1; i++) {
      arr.push({
        key: i + 3,
        name: `Edward King ${i + 3}`,
        age: 32,
        radio: 2,
        address: `西湖区湖底公园${i + 3}号`
      })
    }
    setTableData([...tableData, ...arr])
    console.log(arr)
  }, [])

  // 表格格式
  const columns = [
    {
      title: '序号',
      dataIndex: 'index',
      key: 'index1',
      render: (text, record, index) => <span>{record.key}</span>
    },
    {
      title: '姓名',
      dataIndex: 'name',
      key: 'name'
    },
    {
      title: '姓名', //表格名称
      dataIndex: 'name', //表格名称对应的字段
      key: 'name', // 唯一key
      // 当前行的值，当前行数据，行索引
      render: (text, record, index) => (
        <>
          <div>{record.age > 30 ? `${text}(大于30岁)` : text}</div>
          <a href='/'>{index}--自定义结构</a>
        </>
      )
    },
    {
      title: '年龄',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: '开关',
      dataIndex: 'radio',
      key: 'radio',
      render: (_, record, index) => (
        <Popconfirm
          title={`确定${record.radio == 1 ? '关闭' : '打开'}-----吗？？`}
          placement='bottomRight'
          onConfirm={() => confirm(record, index)}
          okText='确定'
          cancelText='取消'
        >
          {/* <Switch checked={record.radio == 1} onClick={() => hadleSwitch(record, index)} /> */}
          <Switch checked={record.radio == 1} />
        </Popconfirm>
      )
    },
    {
      title: '住址',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: '操作',
      dataIndex: '',
      key: 'x',
      render: (_, record, index) => (
        <>
          <Button type='link' onClick={() => handleModal('查看', index, record)}>
            查看
          </Button>
          <Button type='link' onClick={() => handleModal('编辑', index, record)}>
            编辑
          </Button>
        </>
      )
    }
  ]

  const { loading } = props
  const [pageSize, setPageSize] = useState(20)
  const [visible, setVisible] = useState(false)
  const [title, setTitle] = useState('')
  const [rows, setRows] = useState(null)
  const [tableIndex, setTableIndex] = useState(-1)

  //分页、排序、筛选变化时触发
  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra)
    setPageSize(pagination.pageSize)
  }
  // 气泡
  const confirm = (rows, index) => {
    // message.info(rows, index)
    console.log(rows, index)
    let arr = JSON.parse(JSON.stringify(tableData))
    arr[index].radio = arr[index].radio == 1 ? 2 : 1
    setTableData(arr)
  }
  // 开关点击
  // const hadleSwitch = (rows, index) => {
  //   console.log(rows, index)
  // }

  // 创建、查看、编辑弹窗
  const handleModal = (type, index, row = null) => {
    setTitle(type)
    setVisible(true)
    setRows(row)
    setTableIndex(index)
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
          pagination={{ pageSize }}
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
