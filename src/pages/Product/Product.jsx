import React, { useState, useEffect } from 'react';

import { Button, Modal, Form, Input, message } from 'antd';
import { v4 as uuid } from 'uuid';

import { AppContent } from '../../layouts';

import { Table } from 'antd';

import './Product.css';
import { productAPI } from '../../http/apiURL';
import AXIOS from '../../http/http-common';

const Product = () => {
  const [dataSource, setDataSource] = useState(null);
  //Define state to varible to store the data
  const [products, setProducts] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const [form] = Form.useForm();

  const Store_Id = JSON.stringify(sessionStorage.userData);
  const userData = JSON.stringify(sessionStorage.userData);

  // console.log("Store_Id", Store_Id.Store_Id);

  const fetchData = async () => {
    const { data: customerResponse } = await AXIOS.get(
      `${productAPI.getproductbyid}?Store_Id=${userData.Store_Id}`
    );

    const customerData = customerResponse.data.map((values) => ({
      key: uuid(),
      Store_Id: Store_Id.Store_Id,
      Product_Name: values.Product_Name,
      Product_Price: values.Product_Price,
      Product_Description: values.Product_Description,
      Usage_Unit: values.Usage_Unit,
      Quantity_in_Hand: values.Quantity_in_Hand,
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
        Store_Id: Store_Id.Store_Id,
        Product_Name: values.Product_Name,
        Product_Price: values.Product_Price,
        Product_Description: values.Product_Description,
        Usage_Unit: values.Usage_Unit,
        Quantity_in_Hand: values.Quantity_in_Hand,
        // Product_SKU: "",
        // Product_Image: "",
      };

      try {
        const { data } = await AXIOS.post(productAPI.productinsert, payload);
        message.success('Product Added Successfully');
        setDataSource();
        window.location.reload(); // Refresh the page after successful product addition
      } catch (error) {
        console.error(error);
        message.error('There was an error adding the product.');
      }
    });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const column = [
    {
      title: 'Product Name',
      dataIndex: 'Product_Name',
      key: 'Product_Name',
      // render: (text, record) => {
      //   console.log("record", record);
      //   return text.text;
      //   // return <span>{text && text.Product_Name}</span>;
      // },
    },
    {
      title: 'Product price',
      dataIndex: 'Product_Price',
      key: 'Product_Price',
      // render: (text) => <span>{text}</span>,
    },
    {
      title: 'Product Description',
      dataIndex: 'Product_Description',
      key: 'Product_Description',
      // render: (text) => <span>{text}</span>,
    },
    {
      title: 'Usage Unit',
      dataIndex: 'Usage_Unit',
      key: 'Usage_Unit',
      // render: (text) => <span>{text.Usage_Unit}</span>,
    },
    {
      title: 'Quantity In Hand',
      dataIndex: 'Quantity_in_Hand',
      key: 'Quantity_in_Hand',
      // render: (text) => <span>{text.Usage_Unit}</span>,
    },
  ];

  return (
    <AppContent>
      <div className="head">Availale Product list</div>
      <div style={{ position: 'fixed', top: 120, right: 50 }}>
        <Button
          type="primary"
          size="large"
          style={{
            transition: 'all 0.2s ease-in-out',
          }}
          onClick={() => setIsModalOpen(true)}
        >
          Add product
        </Button>

        <Modal
          title="Add Product"
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          okText="Add Product"
          style={{ minWidth: 600, height: 600 }}
        >
          <Form form={form} name="addProductForm" layout="vertical">
            <Form.Item
              name="Product_Name"
              label="Product Name"
              rules={[
                { required: true, message: 'Please enter a Product Name' },
              ]}
            >
              <Input placeholder="Enter Product Name" />
            </Form.Item>

            <Form.Item
              name="Product_Description"
              label="Product Description"
              rules={[
                {
                  required: true,
                  message: 'Please enter a Product Description',
                },
              ]}
            >
              <Input placeholder="Enter Product Description" />
            </Form.Item>

            <Form.Item
              name="Usage_Unit"
              label="Usage Unit"
              rules={[{ required: true, message: 'Please enter Usage Unit' }]}
            >
              <Input placeholder="Enter Usage Unit" />
            </Form.Item>

            <Form.Item
              name="Product_Price"
              label="Product Price"
              rules={[{ required: true, message: 'Please enter a Price' }]}
            >
              <Input placeholder="Enter Product Price" type="number" />
            </Form.Item>

            <Form.Item
              name="Quantity_in_Hand"
              label="Quantity In Hand"
              rules={[
                { required: true, message: 'Please enter Quantity In Hand' },
              ]}
            >
              <Input placeholder="Enter Quantity In Hand" />
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
export default Product;
