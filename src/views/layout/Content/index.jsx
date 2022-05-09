import React, { useState, Suspense, useEffect } from 'react';
import {
  Route,
  Redirect,
  Switch,
  useHistory,
  withRouter
} from 'react-router-dom';
import { Layout } from 'antd';
import './index.less';
import routeMap from '@/config/routeMap';
import Loading from '@/views/loading';
const { Content } = Layout;

// 这里注册路由（react-router-dom)5.0版本为例：
const LayoutContent = props => {
  const [routeName, setRouteName] = useState('/home');
  const history = useHistory();
  // console.log(routeMap, 'routeMap');
  useEffect(() => {
    // setRouteName(history.location.pathname);
  }, []);

  return (
    <Content
      className="Content"
      style={{ height: 'calc(100% - 100px)', overflow: 'hidden' }}
    >
      <Suspense fallback={<Loading />}>
        {/* Switch的location：用于缓存路由 */}
        <Switch location={props.location}>
          <Redirect exact from="/" to="/home" />
          {routeMap.map(item =>
            <Route
              key={item.path}
              path={item.path}
              component={item.component}
            />
          )}
          <Redirect to="/error/404" />
        </Switch>
      </Suspense>
    </Content>
  );
};
export default withRouter(LayoutContent);
