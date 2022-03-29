import React from 'react';
import { Button, Row, Col } from 'antd';
import './index.less';

const NotFound = (props) => {
  const { history } = props;
  const goHome = () => history.replace('/home');
  return (
    <Row className="not-found">
      <Col span={24} className="right">
        <h1>404</h1>
        <h2>抱歉，你访问的页面不存在</h2>
        <div>
          <Button type="primary" onClick={goHome}>
            回到首页
          </Button>
        </div>
      </Col>
    </Row>
  );
};

export default NotFound;
