/*
 * @Author: shufan100 1549248097@qq.com
 * @Date: 2022-10-23 14:47:47
 * @LastEditors: shufan100 1549248097@qq.com
 * @LastEditTime: 2023-02-22 18:00:19
 * @FilePath: \react-antd-project\src\mock\list.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import Mock from 'mockjs'
const list = []
const count = 5

for (let i = 0; i < count; i++) {
  list.push(
    Mock.mock({
      key: '@increment',
      id: '@increment',
      title: '@ctitle(5, 10)',
      author: '@cname',
      readings: '@integer(300, 5000)',
      date: '@datetime',
      date2: '@date',
      username: '@last',
      name: '@cname',
      password: '@password',
      'type|1': ['CN', 'US', 'JP', 'EU'],
      grade: ['CN', 'US', 'JP', 'EU'],
      'open|0-1': 0,
      'sex|0-1': 0,
      number: '@integer(1,100)',
      price: '@integer(1,1000)',
      weight: '@integer(1,10)',
      orderCode: '@integer(1,1000000000000)',
      url: '@url',
      datetime: '@datetime',
      time: '@datetime(hh:mm:ss)',
      address: '@province @city @county',
      // address: '@city(true)',
      adit: '@cword(2,8)',
      phone: '13520075555'
    })
  )
}
export default {
  code: 200,
  data: list
}
