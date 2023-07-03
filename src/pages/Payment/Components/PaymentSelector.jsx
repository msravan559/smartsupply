import React, { useState } from 'react';

import { Radio, Row } from 'antd';

const PaymentSelector = () => (
  <>
    <Row></Row>
    <Radio.Group defaultValue="a" buttonStyle="light">
      <Radio.Button value="a">Add Payments</Radio.Button>
      <Radio.Button value="b">Recent Payments</Radio.Button>
    </Radio.Group>
  </>
);
export default PaymentSelector;
