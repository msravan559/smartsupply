import React, { useState } from "react";
import { Radio, Space, DatePicker, Checkbox, Select, Input } from "antd";
import Customer from "../Customer";

const { Option } = Select;

const DeliveryForm = () => {
  const [deliveryType, setDeliveryType] = useState(null);
  const [address, onAddressChange] = useState("");
  const [email, onEmailChange] = useState("");
  const [pincode, onPincodeChange] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [isSaturdayDelivery, setIsSaturdayDelivery] = useState(false);
  const [isSundayDelivery, setIsSundayDelivery] = useState(false);

  const handleDeliveryTypeChange = (e) => {
    setDeliveryType(e.target.value);
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleSaturdayDeliveryChange = (e) => {
    setIsSaturdayDelivery(e.target.checked);
  };

  const handleSundayDeliveryChange = (e) => {
    setIsSundayDelivery(e.target.checked);
  };

  const handleDeliveryDateChange = (value) => {
    console.log(`Selected delivery date: ${value}`);
  };

  return (
    <>
      <div>
        <Radio.Group onChange={handleDeliveryTypeChange} value={deliveryType}>
          <Space direction="horizontal">
            <Radio
              style={{
                marginRight: "60px",
                borderColor: "black",
              }}
              value={1}
            >
              Daily
            </Radio>
            <Radio
              style={{
                marginRight: "60px",
                borderColor: "black",
              }}
              value={2}
            >
              Alternate Day
            </Radio>
            <Radio
              style={{
                marginRight: "60px",
                borderColor: "black",
              }}
              value={3}
            >
              Select Weekdays
            </Radio>
          </Space>
        </Radio.Group>
        <div style={{ padding: "50px" }}>
          {deliveryType === 1 && (
            <Space direction="horizontal" size={16}>
              <Input
                placeholder="Customer Address"
                size="large"
                value={address}
                onChange={(e) => onAddressChange(e.target.value)}
                style={{
                  marginRight: "60px",
                  borderColor: "black",
                }}
              />
              <Input
                placeholder="Customer Email"
                size="large"
                value={email}
                onChange={(e) => onEmailChange(e.target.value)}
                style={{ marginRight: "60px", borderColor: "black" }}
              />
              <Input
                placeholder="Customer Pin Code"
                size="large"
                value={pincode}
                onChange={(e) => onPincodeChange(e.target.value)}
                style={{ marginRight: "60px", borderColor: "black" }}
              />
            </Space>
          )}

          {deliveryType === 2 && (
            <Space direction="vertical" size={16}>
              <DatePicker
                onChange={handleStartDateChange}
                style={{ borderColor: "black" }}
                size="large"
              />
              <Checkbox.Group
                onChange={(values) => console.log(`Selected days: ${values}`)}
                size="large"
              >
                <span style={{ marginRight: "50px" }}>
                  Does delivery happens on saturday and / or on sunday?
                </span>
                <Checkbox value="saturday" style={{ borderColor: "black" }}>
                  Saturday
                </Checkbox>
                <Checkbox value="sunday" style={{ borderColor: "black" }}>
                  Sunday
                </Checkbox>
              </Checkbox.Group>
              <Space size={16}>
                <Input
                  placeholder="Customer Address"
                  style={{ borderColor: "black" }}
                  size="large"
                />
                <Input
                  placeholder="Customer Email"
                  style={{ borderColor: "black" }}
                  size="large"
                />
                <Input
                  placeholder="Customer Zip Code"
                  style={{ borderColor: "black" }}
                  size="large"
                />
              </Space>
            </Space>
          )}

          {deliveryType === 3 && (
            <Space direction="vertical" size={16}>
              <Select
                defaultValue="Monday"
                onChange={handleDeliveryDateChange}
                size="large"
                style={{ borderColor: "black" }}
              >
                <Option value="Monday">Monday</Option>
                <Option value="Tuesday">Tuesday</Option>
                <Option value="Wednesday">Wednesday</Option>
                <Option value="Thursday">Thursday</Option>
                <Option value="Friday">Friday</Option>
                <Option value="Saturday">Saturday</Option>
                <Option value="Sunday">Sunday</Option>
              </Select>
              <Space size={16}>
                <Input
                  placeholder="Customer Address"
                  style={{ borderColor: "black" }}
                  size="large"
                />
                <Input
                  placeholder="Customer Email"
                  style={{ borderColor: "black" }}
                  size="large"
                />
                <Input
                  placeholder="Customer Zip Code"
                  style={{ borderColor: "black" }}
                  size="large"
                />
              </Space>
            </Space>
          )}
        </div>
      </div>
    </>
  );
};

export default DeliveryForm;
