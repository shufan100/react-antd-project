import { lazy } from 'react'
//组件
const Buttons = lazy(() => import('@/views/page/BasisCom/Buttons'))
const Icons = lazy(() => import('@/views/page/BasisCom/Icon'))
const Table = lazy(() => import('@/views/page/BasisCom/Table'))
const Form = lazy(() => import('@/views/page/BasisCom/Form'))
const Markdown = lazy(() => import('@/views/page/BasisCom/Markdown'))
const Inputs = lazy(() => import('@/views/page/BasisCom/Input'))
const Image = lazy(() => import('@/views/page/BasisCom/Image'))
const Message = lazy(() => import('@/views/page/BasisCom/Message'))
export default [
  { path: '/basisCom/buttons', component: Buttons },
  { path: '/basisCom/icons', component: Icons },
  { path: '/basisCom/table', component: Table },
  { path: '/basisCom/form', component: Form },
  { path: '/basisCom/markdown', component: Markdown },
  { path: '/basisCom/inputs', component: Inputs },
  { path: '/basisCom/image', component: Image },
  { path: '/basisCom/message', component: Message }
]
