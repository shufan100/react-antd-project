import request from '@/utils/request';
import axios from 'axios';

export const getUser1 = data => request({
  url: `/search/users?q=${data}`,
  method: 'get',

});
export const getUser2 = () => request({
  url: '/search/users2',
  method: 'get'
});

export const getCars = () => request({
  url: '/cars',
  method: 'get'
});