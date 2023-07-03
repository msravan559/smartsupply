import React from "react";

import { useState } from "react";
import { Card, Col, Row, Input, Select, Space } from "antd";

const Addcustomer = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  const [formData, setFormData] = useState({});

  const handleChange1 = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div style={{ height: "200px", overflowY: "scroll", overflowX: "hidden" }}>
      <Row gutter={12}>
        <Col span={8}>
          <Card title="Customer Name" bordered={false}>
            <Input placeholder="Customer Name" onChange={handleChange1} />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Customer Phone Number" bordered={false}>
            <Input
              placeholder="Customer Phone Number"
              onChange={handleChange1}
            />
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Select Group" bordered={false}>
            <Space wrap>
              <Select
                defaultValue="Select Groups"
                style={{
                  width: 400,
                }}
                onChange={handleChange}
                options={[
                  {
                    value: "SmartGroup",
                    label: "SmartGroup",
                  },
                  {
                    value: "Default",
                    label: "Default",
                  },
                  {
                    value: "adda",
                    label: "adda",
                  },
                ]}
              />
            </Space>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default Addcustomer;
