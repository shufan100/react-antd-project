import React, { useState, useEffect } from 'react'
import { Table, Tooltip, message, Button, Space } from 'antd'
import { useRequest } from 'ahooks'

// 接口
import { getFetchList } from '@/api/mockApi'
// 表格格式
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    key: 'id',
    width: 60,
    align: 'center',
    render: (text, record, index) => <span>{index}</span>
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
    title: '性别',
    dataIndex: 'sex',
    key: 'sex',
    render: (text, record, index) => (text == 1 ? '男' : '女')
  },
  {
    title: '号码',
    dataIndex: 'phone',
    key: 'phone'
  },
  {
    title: '时间',
    dataIndex: 'datetime',
    key: 'datetime',
    ellipsis: true //超出省略号，使用默认提示
  },
  {
    title: '住址',
    dataIndex: 'address',
    key: 'address',
    width: 200,
    ellipsis: true //超出省略号，使用默认提示
  }
]
export default function HooksWriting() {
  const [loading, setLoading] = useState(false)
  const [tableData, setTableData] = useState([])

  useEffect(() => {}, [])
  const init = async () => {
    setLoading(true)
    const { data } = await getFetchList()
    console.log(data, '111')
    setTableData(data.data)
    setLoading(false)
  }
  const { data, run } = useRequest(getFetchList, {
    manual: false,
    onBefore: params => {
      // 请求之前触发
      setLoading(true)
    },
    onSuccess: ({ data }, params) => {
      console.log(data)
      setTableData(data.data)
      setLoading(false)
    },
    onError: error => {
      // 请求失败触发
      setLoading(false)
    }
  })
  const init2 = () => {
    run()
  }

  return (
    <div>
      <h2 className='h2Style'>useRequest基础用法</h2>

      <div className='main'>
        <Space size={'small'}>
          <Button type='primary' onClick={() => init2()}>
            查询
          </Button>
          <Button>重置</Button>
        </Space>
        <Table style={{ marginTop: '20px' }} dataSource={tableData} columns={columns} bordered={true} loading={loading} pagination={false} />
      </div>
    </div>
  )
}
