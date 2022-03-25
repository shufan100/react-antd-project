import React, { useState, Suspense } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';
import { Layout } from 'antd';
import './index.less';
import routeMap from '@/config/routeMap';
import Loading from '@/views/loading';
const { Content } = Layout;;

// 这里注册路由（react-router-dom)5.0版本为例：
const LayoutContent = () => {
  const [state, setState] = useState({});
  return (
    <Content className='Content' style={{ height: 'calc(100% - 100px)' }}>
      <Switch>
        <Suspense fallback={<Loading />}>
          <Redirect exact from="/" to="/home" />
          {
            routeMap.map(item => <Route key={item.path} path={item.path} component={item.component} />)
          }
          <Redirect to="/home" />{/* 路由重新 */}
        </Suspense>
      </Switch>
    </Content>
  );
};
export default LayoutContent;