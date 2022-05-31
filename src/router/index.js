import { lazy } from 'react'
import Nested from './modules/Nested'
import BasisCom from './modules/BasisCom'
import Demo from './modules/Demo'
import Permissions from './modules/Permissions'

// 引入组件:路由懒加载(切换路由的时候才加载)
// 首页和404页默认加载
import Home from '@/views/page/Home'
// 404
import Error404 from '@/views/page/Error/404'
// 一级路由
const Abouts = lazy(() => import('@/views/page/Abouts'))
const User = lazy(() => import('@/views/page/User'))

// 导出注册路由组件
let routeMap = [
  // 一级路由
  { path: '/home', component: Home, roles: ['admin', 'editor', 'guest'] },
  { path: '/abouts', component: Abouts, roles: ['admin', 'editor', 'guest'] },
  { path: '/user', component: User, roles: ['admin', 'editor', 'guest'] },
  ...Permissions,
  ...BasisCom,
  ...Nested,
  ...Demo,
  // 404
  { path: '/error/404', component: Error404, roles: ['admin', 'editor', 'guest'] }
]
export default routeMap
