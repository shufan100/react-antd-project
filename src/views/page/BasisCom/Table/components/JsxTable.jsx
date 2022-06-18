import React from 'react';
import { Space, Table, Tag, Button, Collapse, Message } from 'antd';
const { Column, ColumnGroup } = Table;

const data = [
  {
    key: '1',
    firstName: 'Jim',
    lastName: 'Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    tags: ['loser']
  },
  {
    key: '2',
    firstName: 'Joe',
    lastName: 'Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    tags: ['cool', 'teacher']
  }
];
for (let i = 0; i < 50; i++) {
  data.push({
    key: i + 3,
    firstName: `Joe ${i + 3}`,
    lastName: `Black ${i + 3}`,
    age: 32 + i,
    address: 'Sidney No. 1 Lake Park',
    tags: ['pag']
  });
}

export default function JsxTable(props) {
  const { loading } = props;
  // const [pageSize, setPageSize] = useState(10)
  //分页、排序、筛选变化时触发
  const onChange = (pagination, filters, sorter, extra) => {
    console.log(pagination, filters, sorter, extra);
    // setPageSize(pagination.pageSize)
  };
  return (
    <Collapse defaultActiveKey={['2']} ghost expandIconPosition='end'>
      <Collapse.Panel header='JSX风格表格' key='1'>
        <Table dataSource={data} bordered loading={loading} scroll={{ y: 240 }} onChange={onChange}>
          <Column title='index' dataIndex='key' key='key' align='center' width={60} />
          <ColumnGroup title='Name'>
            <Column title='First Name' dataIndex='firstName' key='firstName' />
            <Column title='Last Name' dataIndex='lastName' key='lastName' />
          </ColumnGroup>
          <Column title='Age' dataIndex='age' key='age' width={80} />
          <Column title='Address' dataIndex='address' key='address' />
          <Column
            title='Tags'
            dataIndex='tags'
            key='tags'
            render={tags => (
              <>
                {tags.map(i => (
                  <Tag color={i === 'cool' ? 'volcano' : 'green'} key={i}>
                    {i}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title='Action'
            key='action'
            render={(_, record) => (
              <Space size='middle'>
                <Button type='link' onClick={() => Message.success(record.lastName)}>
                  查看
                </Button>
                <Button type='link'>编辑</Button>
              </Space>
            )}
          />
        </Table>
      </Collapse.Panel>
    </Collapse>
  );
}
