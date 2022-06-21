import Mock from 'mockjs'
import excelAPI from './excel'
import listData from './list'

// excel
Mock.mock(/\/excel\/list/, 'get', excelAPI.excelList)
Mock.mock(/\/fetch\/list/, 'get', listData)

export default Mock
