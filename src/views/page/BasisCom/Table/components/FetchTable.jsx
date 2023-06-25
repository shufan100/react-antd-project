/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-06-25 17:47:09
 * @FilePath: \react-antd-project\src\views\page\BasisCom\Table\components\FetchTable.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React, { useState, useEffect } from 'react'
import { Table, Collapse } from 'antd'
import qs from 'qs'
// 表格格式
const columns = [
  {
    title: '序号',
    dataIndex: 'index',
    width: 60,
    align: 'center',
    render: (text, record, index) => <span>{index + 1}</span>
  },
  {
    title: '姓名',
    dataIndex: 'name',
    render: name => `${name.first} - ${name.last}`
  },
  {
    title: '年龄',
    dataIndex: 'age',
    // render: (text, record, index) => <span>{record.dob.age}</span>,
    sorter: (a, b) => a.age - b.age
  },
  {
    title: 'Email',
    dataIndex: 'email'
  }
]
export default function SelectTable() {
  const [loading, setLoading] = useState(false)
  const [data, setData] = useState()
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10
  })

  const getRandomuserParams = params => ({
    results: params.pagination?.pageSize,
    page: params.pagination?.current,
    ...params
  })
  const fetchData = (params = {}) => {
    setLoading(true)
    fetch(`https://randomuser.me/api?${qs.stringify(getRandomuserParams(params))}`)
      .then(res => res.json())
      .then(({ results }) => {
        results.forEach(i => (i.age = i.dob.age))
        setData(results)
        setLoading(false)
        setPagination({
          ...params.pagination,
          total: 200 // 200是模拟数据，您应该从服务器读取它
          // total: data.totalCount,
        })
      })
  }

  useEffect(() => {
    fetchData({ pagination })
  }, []) // eslint-disable-line

  const handleTableChange = (newPagination, filters, sorter) => {
    console.log(newPagination, filters, sorter)
    if (!filters.order) {
      fetchData({
        sortField: sorter.field,
        sortOrder: sorter.order,
        pagination: newPagination
        // ...filters
      })
    }
  }

  return (
    <Collapse defaultActiveKey={['0']} ghost expandIconPosition='end'>
      <Collapse.Panel header='请求表格' key='1'>
        <Table
          columns={columns}
          rowKey={record => record.login.uuid}
          dataSource={data}
          pagination={pagination}
          bordered
          loading={loading}
          scroll={{ y: 240 }}
          title={() => '注：请求+分页的表格'}
          onChange={handleTableChange}
        />
      </Collapse.Panel>
    </Collapse>
  )
}
