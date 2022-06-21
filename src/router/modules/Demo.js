import { lazy } from 'react'
// 之前的案例（写法）
const ClassWriting = lazy(() => import('@/views/page/Demo/ClassWriting'))
const FunWriting = lazy(() => import('@/views/page/Demo/FunWriting'))
const LifeCycleClass = lazy(() => import('@/views/page/Demo/LifeCycle/LifeCycleClass'))
const LifeCycleFun = lazy(() => import('@/views/page/Demo/LifeCycle/LifeCycleFun'))
const PropsWriting = lazy(() => import('@/views/page/Demo/PropsWriting'))
const ReduxWriting = lazy(() => import('@/views/page/Demo/ReduxWriting'))
const RouteWriting = lazy(() => import('@/views/page/Demo/RouteWriting'))
const ParamCom = lazy(() => import('@/views/page/Demo/RouteWriting/ParamCom/Param'))
const SearchCom = lazy(() => import('@/views/page/Demo/RouteWriting/ParamCom/Search'))
const StateCom = lazy(() => import('@/views/page/Demo/RouteWriting/ParamCom/State'))
// aHooks写法
const UseRequest = lazy(() => import('@/views/page/Demo/aHooksWriting/UseRequest'))

export default [
  // 案例
  { path: '/demo/classWriting', component: ClassWriting, roles: ['editor', 'guest'] },
  { path: '/demo/funWriting', component: FunWriting, roles: ['editor', 'guest'] },
  { path: '/demo/lifeCycle/lifeCycleClass', component: LifeCycleClass, roles: ['editor', 'guest'] },
  { path: '/demo/lifeCycle/lifeCycleFun', component: LifeCycleFun, roles: ['editor', 'guest'] },
  { path: '/demo/propsWriting', component: PropsWriting, roles: ['editor', 'guest'] },
  { path: '/demo/reduxWriting', component: ReduxWriting, roles: ['editor', 'guest'] },
  { path: '/demo/routeWriting', component: RouteWriting, roles: ['editor', 'guest'] },
  // aHooks
  { path: '/demo/ahooks/UseRequest', component: UseRequest, roles: ['editor', 'guest'] },
  //接收路由参数
  { path: '/demo/param/:id/:title', component: ParamCom, roles: ['editor', 'guest'] },
  { path: '/demo/search', component: SearchCom, roles: ['editor', 'guest'] },
  { path: '/demo/state', component: StateCom, roles: ['editor', 'guest'] }
]
