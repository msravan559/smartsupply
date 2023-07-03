import React, { useState, useEffect } from 'react';

import {
  Button,
  Modal,
  Form,
  Input,
  message,
  DatePicker,
  Space,
  Table,
  TimePicker,
} from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import { v4 as uuid } from 'uuid';

import { AppContent } from '../../layouts';

import './Orders.css';
import { ordersAPI } from '../../http/apiURL';
import AXIOS from '../../http/http-common';

const Orders = () => {
  const [dataSource, setDataSource] = useState(null);
  //Define state to varible to store the data
  const [products, setProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const Order_Id = JSON.stringify(sessionStorage.userData);
  const Store_Id = JSON.stringify(sessionStorage.userData);
  const userData = JSON.stringify(sessionStorage.userData);
  console.log('userData', userData);

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  dayjs.extend(customParseFormat);
  const onSwap = (time, timeString) => {
    console.log(time, timeString);
  };

  const fetchData = async () => {
    const { data: customerResponse } = await AXIOS.get(
      `${ordersAPI.getallorder}?Store_Id=${userData.Store_Id}`
    );

    const customerData = customerResponse.data.map((values) => ({
      key: uuid(),
      Order_Id: Order_Id.Order_Id,
      Store_Id: Store_Id.Store_Id,
      Customer_ID: values.Customer_ID,
      Order_Date: values.Order_Date,
      Order_Time: values.Order_Time,
      Product_ID: values.Product_ID,
      Product_Quantity: values.Product_Quantity,
    }));

    // console.log(customerData);

    setDataSource(customerData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  //api to post/add new product
  const handleOk = () => {
    form.validateFields().then(async (values) => {
      console.log('values', values);
      const payload = {
        Order_Id: Order_Id.Order_Id,
        Store_Id: Store_Id.Store_Id,
        Customer_ID: values.Customer_ID,
        Order_Date: values.Order_Date,
        Order_Time: values.Order_Time,
        Product_ID: values.Product_ID,
        Product_Quantity: values.Product_Quantity,
      };

      try {
        const { data } = await AXIOS.post(ordersAPI.insert, payload);
        message.success('Order Added Successfully');
        setDataSource();
        window.location.reload(); // Refresh the page after successful product addition
      } catch (error) {
        console.error(error);
        message.error('There was an error adding the Order.');
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const column = [
    {
      title: 'Customer Name',
      dataIndex: 'Customer Name',
      key: 'Customer Name',
      // render: (text, record) => {
      //   console.log("record", record);
      //   return text.text;
      //   // return <span>{text && text.Product_Name}</span>;
      // },
    },

    {
      title: 'Order Date',
      dataIndex: 'Order Date',
      key: 'Order Date',
      // render: (text) => <span>{text}</span>,
    },
    {
      title: 'Order Time',
      dataIndex: 'Order Time',
      key: 'Order Time',
      // render: (text) => <span>{text.Usage_Unit}</span>,
    },
    {
      title: 'Product Name',
      dataIndex: 'Product Name',
      key: 'Product Name',
      // render: (text) => <span>{text.Usage_Unit}</span>,
    },
    {
      title: 'Product Quantity',
      dataIndex: 'Product Quantity',
      key: 'Product Quantity',
      // render: (text) => <span>{text.Usage_Unit}</span>,
    },
  ];

  return (
    <AppContent>
      <div className="head">Orders Received </div>
      <div style={{ position: 'fixed', top: 120, right: 50 }}>
        <Button
          type="primary"
          size="large"
          style={{
            transition: 'all 0.2s ease-in-out',
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Add Orders
        </Button>

        <Modal
          title="Add Orders"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add Orders"
          style={{ minWidth: 600, height: 600 }}
        >
          <Form form={form} name="addOrderForm" layout="vertical">
            <Form.Item
              name=" Customer Name"
              label="Customer Name"
              rules={[
                { required: true, message: 'Please enter a Customer Name' },
              ]}
            >
              <Input placeholder="Enter Customer Name" />
            </Form.Item>

            <Form.Item
              name="Order Date"
              label="Order Date"
              rules={[{ required: true, message: 'Please choose Date' }]}
            >
              <Space direction="vertical">
                <DatePicker onChange={onChange} />
              </Space>
            </Form.Item>

            <Form.Item
              name="Order Time"
              label="Order Time"
              rules={[{ required: true, message: 'Please choose Time' }]}
            >
              <TimePicker
                onSwap={onSwap}
                defaultOpenValue={dayjs('00:00:00', 'HH:mm:ss')}
              />
            </Form.Item>

            <Form.Item
              name="Product Name"
              label="Product Name"
              rules={[
                { required: true, message: 'Please enter a Product Name' },
              ]}
            >
              <Input placeholder="Enter Product Price" />
            </Form.Item>

            <Form.Item
              name=" Product Quantity"
              label=" Product Quantity"
              rules={[
                { required: true, message: 'Please enter Product Quantity ' },
              ]}
            >
              <Input placeholder="Enter Product Quantity " />
            </Form.Item>
          </Form>
        </Modal>
      </div>
      <div>
        <Table
          columns={column}
          dataSource={dataSource}
          scroll={{ x: 400 }}
          pagination={false}
        />
      </div>
    </AppContent>
  );
};
export default Orders;
