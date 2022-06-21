// mock接口
import request from '@/utils/request'

export function excelList() {
  return request({
    url: '/excel/list',
    method: 'get',
    type: 'mock'
  })
}

export function getFetchList(data) {
  return request({
    url: '/fetch/list',
    method: 'get',
    type: 'mock',
    data
  })
}
