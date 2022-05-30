import { lazy } from 'react'
// 嵌套路由
const Menu2_1 = lazy(() => import('@/views/page/Nested/menu2-1'))
const Menu3_1 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-1'))
const Menu3_2 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-2'))
const Menu4_1 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-3/menu4-1'))
const Menu4_2 = lazy(() => import('@/views/page/Nested/menu2-2/menu3-3/menu4-2'))
// 嵌套路由
export default [
  { path: '/nested/Menu2_1', component: Menu2_1, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_1', component: Menu3_1, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_2', component: Menu3_2, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_3/menu4_1', component: Menu4_1, roles: ['admin', 'editor', 'guest'] },
  { path: '/nested/menu2_2/menu3_3/menu4_2', component: Menu4_2, roles: ['admin', 'editor', 'guest'] }
]
