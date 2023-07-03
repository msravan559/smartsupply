import React from 'react';

import { Col, Row } from 'antd';

import LoginCard from './components/LoginCard';

const Login = () => {
  return (
    <Row align="middle" justify="center" style={{ height: '100%' }}>
      <Col xs={18} sm={16} md={12} lg={7}>
        <LoginCard />
      </Col>
    </Row>
  );
};

export default Login;
