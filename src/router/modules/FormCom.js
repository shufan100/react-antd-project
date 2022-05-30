import { lazy } from 'react'
//表单相关
const Table = lazy(() => import('@/views/page/FormCom/Table'))
const Form = lazy(() => import('@/views/page/FormCom/Form'))
const Markdown = lazy(() => import('@/views/page/FormCom/Markdown'))
export default [
  { path: '/formCom/table', component: Table, roles: ['admin'] },
  { path: '/formCom/form', component: Form, roles: ['editor'] },
  { path: '/formCom/markdown', component: Markdown, roles: ['guest'] }
]
