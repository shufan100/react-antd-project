import { lazy } from 'react'
// 权限
const AdminPage = lazy(() => import('@/views/permissions/AdminPage'))
const EditorPage = lazy(() => import('@/views/permissions/EditorPage'))
const GuestPage = lazy(() => import('@/views/permissions/GuestPage'))
// 嵌套路由
export default [
  { path: '/permissions/admin', component: AdminPage, roles: ['admin'] },
  { path: '/permissions/editor', component: EditorPage, roles: ['editor'] },
  { path: '/permissions/guest', component: GuestPage, roles: ['guest'] }
]
