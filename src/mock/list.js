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
      orderCode: 'zgy' + '@integer(1,1000000000000)',
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
