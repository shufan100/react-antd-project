/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: '首页',
    path: '/home',
    icon: 'DesktopOutlined',
    'roles': ['admin', 'editor', 'guest']
  },
  {
    title: '表单相关',
    path: '/formCom',
    icon: 'SolutionOutlined',
    roles: ['admin', 'editor'],
    children: [
      {
        title: '表格',
        path: '/formCom/table',
        roles: ['admin']
      },
      {
        title: '表单',
        path: '/formCom/form',
        roles: ['editor']
      },
      {
        title: '富文本',
        path: '/formCom/markdown',
        roles: ['guest']
      }
    ]
  },
  {
    title: '路由嵌套',
    path: '/nested',
    icon: 'ApartmentOutlined',
    roles: ['admin', 'editor'],
    children: [
      {
        title: '菜单2-1',
        path: '/nested/menu2_1',
        parentPath: '/nested',
        roles: ['admin']
      },
      {
        title: '菜单2-2',
        path: '/nested/menu2_2',
        roles: ['admin'],
        children: [
          {
            title: '菜单3-1',
            path: '/nested/menu2_2/menu3_1',
            parentPath: ['/nested', '/nested/menu2_2'],
            roles: ['admin']
          },
          {
            title: '菜单3-2',
            path: '/nested/menu2_2/menu3_2',
            parentPath: ['/nested', '/nested/menu2_2'],
            roles: ['admin']
          },
          {
            title: '菜单3-3',
            path: '/nested/menu2_2/menu3_3',
            roles: ['admin'],
            children: [
              {
                title: '菜单4-1',
                path: '/nested/menu2_2/menu3_3/menu4_1',
                parentPath: [
                  '/nested',
                  '/nested/menu2_2',
                  '/nested/menu2_2/menu3_3'
                ],
                roles: ['admin']
              },
              {
                title: '菜单4-2',
                path: '/nested/menu2_2/menu3_3/menu4_2',
                parentPath: [
                  '/nested',
                  '/nested/menu2_2',
                  '/nested/menu2_2/menu3_3'
                ],
                roles: ['admin']
              }
            ]
          }
        ]
      }
    ]
  },
  {
    title: '案例',
    path: '/demo',
    icon: 'AppstoreAddOutlined',
    roles: ['admin', 'editor', 'guest'],
    children: [
      {
        title: '写法',
        path: '/demo/contentDemo',
        roles: ['editor', 'guest']
      },
      {
        title: '函数式组件',
        path: '/demo/funCom',
        roles: ['editor', 'guest']
      },
      {
        title: '生命周期(类)',
        path: '/demo/lifeCycleClass',
        roles: ['editor', 'guest']
      },
      {
        title: '生命周期(函数)',
        path: '/demo/lifeCycleFun',
        roles: ['editor', 'guest']
      }
    ]
  },
  {
    title: '用户管理',
    path: '/user',
    icon: 'TeamOutlined',
    roles: ['admin', 'editor', 'guest']
  },
  {
    title: '作者',
    path: '/abouts',
    icon: 'UserOutlined',
    roles: ['admin', 'editor', 'guest']
  }
];
export default menuList;
