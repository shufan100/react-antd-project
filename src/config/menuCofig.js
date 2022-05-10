/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
// import Icons from '@/components/Icons'; // 动态icon
import {
  DesktopOutlined,
  TeamOutlined,
  UserOutlined,
  SolutionOutlined,
  AppstoreAddOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
const menuList = [
  {
    key: '/home',
    label: '首页',
    icon: <DesktopOutlined />,
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
    key: '/demo',
    icon: <AppstoreAddOutlined />,
    roles: ['admin', 'editor', 'guest'],
    children: [
      {
        label: '写法',
        key: '/demo/contentDemo'
      },
      {
        label: '函数式组件',
        key: '/demo/funCom'
      },
      {
        label: '生命周期(类)',
        key: '/demo/lifeCycleClass'
      },
      {
        label: '生命周期(函数)',
        key: '/demo/lifeCycleFun'
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
];
export default menuList;
