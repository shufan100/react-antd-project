import { lazy } from 'react';

// 引入组件:路由懒加载(切换路由的时候才加载)
// 首页和404页默认加载
import Home from '@/views/page/Home';
// 404
import Error404 from '@/views/page/Error/404';

// 一级路由
const Abouts = lazy(() => import('@/views/page/Abouts'));
const User = lazy(() => import('@/views/page/User'));
// 二级路由
const Table = lazy(() => import('@/views/page/FormCom/Table'));
const Form = lazy(() => import('@/views/page/FormCom/Form'));
const Markdown = lazy(() => import('@/views/page/FormCom/Markdown'));
// 多级路由
const Menu2_1 = lazy(() => import('@/views/page/Nested/menu2-1'));
const Menu3_1 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-1'));
const Menu3_2 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-2'));
const Menu4_1 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-3/menu4-1'));
const Menu4_2 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-3/menu4-2'));
// 之前的案例（写法）
const ClassWriting = lazy(() => import('@/views/page/Demo/ClassWriting'));
const FunWriting = lazy(() => import('@/views/page/Demo/FunWriting'));
const LifeCycleClass = lazy(() => import('@/views/page/Demo/LifeCycle/LifeCycleClass'));
const LifeCycleFun = lazy(() => import('@/views/page/Demo/LifeCycle/LifeCycleFun'));
const PropsWriting = lazy(() => import('@/views/page/Demo/PropsWriting'));
const ReduxWriting = lazy(() => import('@/views/page/Demo/ReduxWriting'));
const RouteWriting = lazy(() => import('@/views/page/Demo/RouteWriting'));

// 导出注册路由组件
const routeMap = [
  // 一级路由
  { path: '/home', component: Home, roles: ['admin', 'editor', 'guest'] },
  { path: '/abouts', component: Abouts, roles: ['admin', 'editor', 'guest'] },
  { path: '/user', component: User, roles: ['admin', 'editor', 'guest'] },
  //表单相关
  { path: '/formCom/table', component: Table, roles: ['admin'] },
  { path: '/formCom/form', component: Form, roles: ['editor'] },
  { path: '/formCom/markdown', component: Markdown, roles: ['guest'] },
  // 嵌套路由
  {
    path: '/nested/Menu2_1',
    component: Menu2_1,
    roles: ['admin', 'editor', 'guest']
  },
  {
    path: '/nested/menu2_2/menu3_1',
    component: Menu3_1,
    roles: ['admin', 'editor', 'guest']
  },
  {
    path: '/nested/menu2_2/menu3_2',
    component: Menu3_2,
    roles: ['admin', 'editor', 'guest']
  },
  {
    path: '/nested/menu2_2/menu3_3/menu4_1',
    component: Menu4_1,
    roles: ['admin', 'editor', 'guest']
  },
  {
    path: '/nested/menu2_2/menu3_3/menu4_2',
    component: Menu4_2,
    roles: ['admin', 'editor', 'guest']
  },
  //案例
  { path: '/demo/classWriting', component: ClassWriting, roles: ['editor', 'guest'] },
  { path: '/demo/funWriting', component: FunWriting, roles: ['editor', 'guest'] },
  { path: '/demo/lifeCycle/lifeCycleClass', component: LifeCycleClass, roles: ['editor', 'guest'] },
  { path: '/demo/lifeCycle/lifeCycleFun', component: LifeCycleFun, roles: ['editor', 'guest'] },
  { path: '/demo/propsWriting', component: PropsWriting, roles: ['editor', 'guest'] },
  { path: '/demo/reduxWriting', component: ReduxWriting, roles: ['editor', 'guest'] },
  { path: '/demo/routeWriting', component: RouteWriting, roles: ['editor', 'guest'] },
  //
  {
    path: '/error/404',
    component: Error404,
    roles: ['admin', 'editor', 'guest']
  }
];
export default routeMap;
