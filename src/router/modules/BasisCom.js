import { lazy } from 'react'
//组件
const Basis = lazy(() => import('@/views/page/BasisCom/Basis'))
const Table = lazy(() => import('@/views/page/BasisCom/Table'))
const Form = lazy(() => import('@/views/page/BasisCom/Form'))
const Markdown = lazy(() => import('@/views/page/BasisCom/Markdown'))
const Anchor = lazy(() => import('@/views/page/BasisCom/Anchor'))
export default [
  { path: '/basisCom/basis', component: Basis },
  { path: '/basisCom/table', component: Table },
  { path: '/basisCom/form', component: Form },
  { path: '/basisCom/markdown', component: Markdown },
  { path: '/basisCom/anchor', component: Anchor }
]
