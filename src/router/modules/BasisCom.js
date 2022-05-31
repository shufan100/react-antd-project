import { lazy } from 'react'
//表单相关
const Table = lazy(() => import('@/views/page/BasisCom/Table'))
const Form = lazy(() => import('@/views/page/BasisCom/Form'))
const Markdown = lazy(() => import('@/views/page/BasisCom/Markdown'))
export default [
  { path: '/BasisCom/table', component: Table, roles: ['admin'] },
  { path: '/BasisCom/form', component: Form, roles: ['editor'] },
  { path: '/BasisCom/markdown', component: Markdown, roles: ['guest'] }
]
