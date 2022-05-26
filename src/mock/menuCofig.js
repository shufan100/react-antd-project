/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
// import Icons from '@/components/Icons'; // 动态icon
import { AppstoreOutlined, TeamOutlined, UserOutlined, SolutionOutlined, AppstoreAddOutlined, ApartmentOutlined } from '@ant-design/icons'
const menuList = [
  {
    key: '/home',
    label: '首页',
    icon: <AppstoreOutlined />,
    roles: ['admin', 'editor', 'guest']
  },
  {
    label: '表单相关',
    key: 'formCom',
    icon: <SolutionOutlined />,
    roles: ['admin', 'editor'],
    children: [
      {
        label: '表格',
        key: '/formCom/table'
      },
      {
        label: '表单',
        key: '/formCom/form'
      },
      {
        label: '富文本',
        key: '/formCom/markdown'
      }
    ]
  },
  {
    label: '路由嵌套',
    key: 'nested',
    icon: <ApartmentOutlined />,
    roles: ['admin', 'editor'],
    children: [
      {
        label: '菜单2-1',
        key: '/nested/menu2_1'
      },
      {
        label: '菜单2-2',
        key: 'menu2_2',
        children: [
          {
            label: '菜单3-1',
            key: '/nested/menu2_2/menu3_1'
          },
          {
            label: '菜单3-2',
            key: '/nested/menu2_2/menu3_2'
          },
          {
            label: '菜单3-3',
            key: 'menu3_3',
            children: [
              {
                label: '菜单4-1',
                key: '/nested/menu2_2/menu3_3/menu4_1'
              },
              {
                label: '菜单4-2',
                key: '/nested/menu2_2/menu3_3/menu4_2'
              }
            ]
          }
        ]
      }
    ]
  },
  {
    label: '案例',
    key: 'demo',
    icon: <AppstoreAddOutlined />,
    roles: ['admin', 'editor', 'guest'],
    children: [
      {
        label: '类式组件写法',
        key: '/demo/classWriting'
      },
      {
        label: '函数式组件写法',
        key: '/demo/funWriting'
      },
      {
        label: '生命周期',
        key: 'lifeCycle',
        children: [
          {
            label: '生命周期(类)',
            key: '/demo/lifeCycle/lifeCycleClass'
          },
          {
            label: '生命周期(函数)',
            key: '/demo/lifeCycle/lifeCycleFun'
          }
        ]
      },
      {
        label: 'Props写法',
        key: '/demo/propsWriting'
      },
      {
        label: 'Redux写法',
        key: '/demo/reduxWriting'
      },
      {
        label: 'Route写法',
        key: '/demo/routeWriting'
      }
    ]
  },
  {
    label: '用户管理',
    key: '/user',
    icon: <TeamOutlined />,
    roles: ['admin', 'editor', 'guest']
  },
  {
    label: '作者',
    key: '/abouts',
    icon: <UserOutlined />,
    roles: ['admin', 'editor', 'guest']
  }
]
export default menuList