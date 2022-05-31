/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
// import Icons from '@/components/Icons'; // 动态icon
import { AppstoreOutlined, UnlockOutlined, TeamOutlined, UserOutlined, SolutionOutlined, AppstoreAddOutlined, ApartmentOutlined } from '@ant-design/icons'
const menuList = [
  {
    key: '/home',
    label: '首页',
    icon: <AppstoreOutlined />
  },
  {
    label: '权限管理',
    key: 'permissions',
    icon: <UnlockOutlined />,
    children: [
      {
        label: 'admin页面',
        key: '/permissions/admin',
        roles: ['admin']
      },
      {
        label: 'editor页面',
        key: '/permissions/editor',
        roles: ['editor']
      },
      {
        label: 'guest页面',
        key: '/permissions/guest',
        roles: ['guest']
      }
    ]
  },
  {
    label: '基础组件',
    key: 'BasisCom',
    icon: <SolutionOutlined />,
    children: [
      {
        label: '表格',
        key: '/BasisCom/table'
      },
      {
        label: '表单',
        key: '/BasisCom/form'
      },
      {
        label: '富文本',
        key: '/BasisCom/markdown'
      }
    ]
  },

  {
    label: '路由嵌套',
    key: 'nested',
    icon: <ApartmentOutlined />,
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
    icon: <TeamOutlined />
  },
  {
    label: '作者',
    key: '/abouts',
    icon: <UserOutlined />
  }
]
export default menuList
