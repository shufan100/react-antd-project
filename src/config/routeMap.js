import { lazy } from 'react';

// 引入组件:路由懒加载(切换路由的时候才加载)
// 首页和404页默认加载
import Home from '@/views/page/Home';
// 404
import Error404 from '@/views/page/Error/404';

// 一级路由
const About = lazy(() => import('@/views/page/About'));
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
// 之前的案例
const ContentDemo = lazy(() => import('@/views/page/Demo/ContentDemo'));
const FunCom = lazy(() => import('@/views/page/Demo/FunCom'));
const LifeCycle = lazy(() => import('@/views/page/Demo/LifeCycle'));


// 导出，再注册组件
const routeMap = [
  { path: '/home', component: Home, roles: ['admin', 'editor', 'guest'] },
  { path: '/about', component: About, roles: ['admin', 'editor', 'guest'] },
  { path: '/user', component: User, roles: ['admin', 'editor', 'guest'] },
  // 
  { path: '/formCom/table', component: Table, roles: ['admin'] },
  { path: '/formCom/form', component: Form, roles: ['editor'] },
  { path: '/formCom/markdown', component: Markdown, roles: ['guest'] },
  // 
  { path: '/nested/Menu2_1', component: Menu2_1, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_1', component: Menu3_1, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_2', component: Menu3_2, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_3/menu4_1', component: Menu4_1, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_3/menu4_2', component: Menu4_2, roles: ['admin', 'editor', 'guest'] },
  // 
  { path: '/Demo/ContentDemo', component: ContentDemo, roles: ['editor', 'guest'] },
  { path: '/Demo/funCom', component: FunCom, roles: ['editor', 'guest'] },
  { path: '/Demo/lifeCycle', component: LifeCycle, roles: ['editor', 'guest'] },
  // 
  { path: '/error/404', component: Error404, roles: ['admin', 'editor', 'guest'] },


];
export default routeMap;