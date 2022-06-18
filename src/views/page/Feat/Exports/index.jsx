import React, { Component } from 'react';
import { Table, Tag, Form, Button, Input, Radio, Select, Message } from 'antd';
import { FileOutlined, FileExcelOutlined } from '@ant-design/icons';

import { excelList } from '@/api';
const columns = [
  {
    title: 'Id',
    dataIndex: 'id',
    key: 'id',
    width: 200,
    align: 'center'
  },
  {
    title: 'Title',
    dataIndex: 'title',
    key: 'title',
    width: 200,
    align: 'center'
  },
  {
    title: 'Author',
    key: 'author',
    dataIndex: 'author',
    width: 100,
    align: 'center',
    render: author => <Tag key={author}>{author}</Tag>
  },
  {
    title: 'Readings',
    dataIndex: 'readings',
    key: 'readings',
    width: 195,
    align: 'center'
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
    width: 195,
    align: 'center'
  }
];
const mainStyle = {
  background: '#fff',
  padding: '16px'
};
class Excel extends Component {
  _isMounted = false; // 这个变量是用来标志当前组件是否挂载
  state = {
    list: [],
    filename: 'excel-file',
    autoWidth: true,
    bookType: 'xlsx',
    downloadLoading: false,
    selectedRows: [],
    selectedRowKeys: []
  };

  componentDidMount() {
    this._isMounted = true;
    this.fetchData();
  }
  componentWillUnmount() {
    this._isMounted = false;
  }
  fetchData = () => {
    excelList().then(response => {
      const list = response.data.data.items;
      console.log(response);
      if (this._isMounted) {
        this.setState({ list });
      }
    });
  };
  onSelectChange = (selectedRowKeys, selectedRows) => {
    this.setState({ selectedRows, selectedRowKeys });
  };
  handleDownload = type => {
    if (type === 'selected' && this.state.selectedRowKeys.length === 0) {
      Message.error('至少选择一项进行导出');
      return;
    }
    this.setState({
      downloadLoading: true
    });
    import('@/utils/Export2Excel').then(excel => {
      const tHeader = ['Id', 'Title', 'Author', 'Readings', 'Date'];
      const filterVal = ['id', 'title', 'author', 'readings', 'date'];
      const list = type === 'all' ? this.state.list : this.state.selectedRows;
      const data = this.formatJson(filterVal, list);
      excel.export_json_to_excel({
        header: tHeader,
        data,
        filename: this.state.filename,
        autoWidth: this.state.autoWidth,
        bookType: this.state.bookType
      });
      this.setState({
        selectedRowKeys: [], // 导出完成后将多选框清空
        downloadLoading: false
      });
    });
  };
  formatJson(filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]));
  }
  filenameChange = e => {
    this.setState({
      filename: e.target.value
    });
  };
  autoWidthChange = e => {
    this.setState({
      autoWidth: e.target.value
    });
  };
  bookTypeChange = value => {
    this.setState({
      bookType: value
    });
  };
  render() {
    const { selectedRowKeys } = this.state;
    const rowSelection = {
      selectedRowKeys,
      onChange: this.onSelectChange
    };
    return (
      <div style={{ background: '#f0f2f5' }}>
        <h2 style={{ fontWeight: 'bold', padding: '10px', marginBottom: '15px', background: '#fff' }}>导出Excel</h2>
        <div style={mainStyle}>
          <Form layout='inline'>
            <Form.Item label='文件名:'>
              <Input
                style={{ width: '150px' }}
                prefix={<FileOutlined style={{ color: 'rgba(0,0,0,.25)' }} />}
                placeholder='默认excel-file'
                onChange={this.filenameChange}
              />
            </Form.Item>
            <Form.Item label='单元格宽度是否自适应:'>
              <Radio.Group onChange={this.autoWidthChange} value={this.state.autoWidth}>
                <Radio value={true}>是</Radio>
                <Radio value={false}>否</Radio>
              </Radio.Group>
            </Form.Item>
            <Form.Item label='文件类型:'>
              <Select defaultValue='xlsx' style={{ width: 70 }} onChange={this.bookTypeChange}>
                <Select.Option value='xlsx'>xlsx</Select.Option>
                <Select.Option value='csv'>csv</Select.Option>
                <Select.Option value='txt'>txt</Select.Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button type='primary' icon={<FileExcelOutlined style={{ color: '#fff' }} />} onClick={this.handleDownload.bind(null, 'all')}>
                全部导出
              </Button>
            </Form.Item>
            <Form.Item>
              <Button type='primary' icon={<FileExcelOutlined style={{ color: '#fff' }} />} onClick={this.handleDownload.bind(null, 'selected')}>
                导出已选择项
              </Button>
            </Form.Item>
          </Form>
          <br />
          <Table
            // bordered
            columns={columns}
            rowKey={record => record.id}
            dataSource={this.state.list}
            pagination={false}
            rowSelection={rowSelection}
            loading={this.state.downloadLoading}
          />
        </div>
      </div>
    );
  }
}

export default Excel;
