import Mock from 'mockjs';
import excelAPI from './excel';

// excel
Mock.mock(/\/excel\/list/, 'get', excelAPI.excelList);

export default Mock;
