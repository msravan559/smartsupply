import React, { useState, useEffect } from "react";
import {
  Table,
  Input,
  Button,
  Checkbox,
  InputNumber,
  Space,
  DatePicker,
} from "antd";
import { vs as uuid } from "uuid";

const PaymentTable = () => {
  const [keyboard, setKeyboard] = useState(true);

  const columns = [
    {
      title: "Customer Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Mobile Number",
      dataIndex: "age",
      key: "age",
    },
    {
      title: "Amount due",
      dataIndex: "address",
      key: "address",
    },
    {
      title: "\u20B9 Enter Amount for ",
      dataIndex: "",
      key: "",
      render: () => (
        <>
          <Space>
            <p> &#x20b9;</p>
            <InputNumber
              min={1}
              max={10}
              keyboard={keyboard}
              defaultValue={3}
            />
          </Space>
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => <Button type="primary">Submit</Button>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => <Button type="default">view Bill Details</Button>,
    },
    {
      title: "",
      dataIndex: "",
      key: "x",
      render: () => <Button type="default">Invoices</Button>,
    },
  ];

  const data = [
    {
      key: 1,
      name: "Deepthi Treosoft",
      age: "9876543211",
      address: "",
    },
    {
      key: 2,
      name: "srinivas Nagendra",
      age: "7799330022",
      address: "",
    },

    {
      key: 3,
      name: "Deepthi",
      age: "",
      address: "",
    },
    {
      key: 4,
      name: "Keerthi",
      age: "777777777",
      address: "",
    },
    {
      key: 5,
      name: "Vivek",
      age: "9999999999",
      address: "",
    },
    {
      key: 6,
      name: "Srikanth",
      age: "",
      address: "",
    },
    {
      key: 7,
      name: "Hari",
      age: "",
      address: "",
    },
    {
      key: 8,
      name: "Adarsha",
      age: "",
      address: "",
    },
    {
      key: 9,
      name: "teja",
      age: "",
      address: "",
    },
    {
      key: 10,
      name: "Sri",
      age: "",
      address: "",
    },
  ];

  return (
    <Table
      columns={columns}
      dataSource={data}
      scroll={{ x: 300, y: 500 }}
      pagination={false}
    />
  );
};
export default PaymentTable;
