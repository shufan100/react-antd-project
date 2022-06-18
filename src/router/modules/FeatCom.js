import { lazy } from 'react';
//组件
const Exports = lazy(() => import('@/views/page/Feat/Exports'));
const Upload = lazy(() => import('@/views/page/Feat/Upload'));
const Zip = lazy(() => import('@/views/page/Feat/Zip'));
const Clipboard = lazy(() => import('@/views/page/Feat/Clipboard'));

export default [
  { path: '/feat/exports', component: Exports },
  { path: '/feat/upload', component: Upload },
  { path: '/feat/zip', component: Zip },
  { path: '/feat/clipboard', component: Clipboard }
];
