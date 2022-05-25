const users = {
  admin: {
    id: 'admin',
    role: 'admin',
    name: '舒梵',
    avatar: require('../assets/images/avatar-1.jpeg'),
    description: '拥有系统内所有菜单和路由权限',
    age: 18
  },
  editor: {
    id: 'editor',
    role: 'editor',
    name: '编辑员',
    avatar: require('../assets/images/avatar-2.jpg'),
    description: '可以看到除户管理页面之外的所有页面',
    sex: '女'
  },
  guest: {
    id: 'guest',
    role: 'guest',
    name: '游客',
    avatar: require('../assets/images/avatar-3.png'),
    description: '仅能看到Dashboard、开发文档、权限测试和关于作者四个页面',
    address: '地址'
  }
}
export const getUserInfo = username => users[username]

// 首页数据
export const growCardList = [
  {
    title: '访问数',
    icon: 'PandaIcon',
    value: 2000,
    total: 120000,
    color: 'green',
    action: '月'
  },
  {
    title: '成交额',
    icon: 'HeartSvg',
    value: 20000,
    total: 500000,
    color: 'blue',
    action: '月'
  },
  {
    title: '下载数',
    icon: 'PandaIcon',
    value: 8000,
    total: 120000,
    color: 'orange',
    action: '周'
  },
  {
    title: '成交数',
    icon: 'HeartSvg',
    value: 5000,
    total: 50000,
    color: 'purple',
    action: '年'
  }
]
