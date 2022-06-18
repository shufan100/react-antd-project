import request from '@/utils/request';

export const getUser1 = data =>
  request({
    url: `/search/users?q=${data}`,
    method: 'get'
  });
export const getUser2 = () =>
  request({
    url: '/search/users2',
    method: 'get'
  });

export const getCars = () =>
  request({
    url: '/cars',
    method: 'get'
  });

export const getList = data =>
  request({
    url: '/list',
    method: 'post',
    data
  });

// mock接口
export function excelList() {
  return request({
    url: '/excel/list',
    method: 'get',
    type: 'mock'
  });
}
