import { React } from 'react';

import { useState } from 'react';

import { DatePicker } from 'antd';

import {
  Radio,
  Tabs,
  Card,
  Col,
  Row,
  Input,
  Form,
  Select,
  Space,
  Checkbox,
  InputNumber,
  Button,
  message,
} from 'antd';

import { AppContent } from '../../layouts';
import AXIOS from '../../http/http-common';
import { customerAPI } from '../../http/apiURL';

const { Option } = Select;
//paymentdetails(depositamount onchange)
const onChange = (value) => {
  // console.log(`checked = ${e.target.checked}`);
};

//Selectgroup handlechange
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
// const  = (e) => {
//   console.log(`checked = ${e.target.checked}`);
// };

function addedElement2() {
  return 1;
}

// const AddedElement = () => {
//   return <h1>Hello1</h1>;
// };

const Customer = (Store_id) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [mobilenumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [pincode, setPincode] = useState('');
  const [value, setValue] = useState(1);
  const [data, setData] = useState(null);
  const [count, setCount] = useState(1);
  const [delivery, setdelivery] = useState('');
  const [daily, setdaily] = useState('');
  const [altdays, setaltdays] = useState('');
  const [weekdays, setweekdays] = useState('');
  // const [Store_Id, setStoreId] = useState("");

  const Store_Id = JSON.stringify(sessionStorage.userData);

  const handleSubmit = async (values) => {
    var payload = JSON.stringify({
      Customer_name: name,
      Store_Id: Store_Id.Store_Id,
      Customer_email: email,
      Customer_Mobilenumber: mobilenumber,
      Customer_address: address,
      Customer_pincode: pincode,
      Frequency_of_Delivery: delivery,
      Group_ID: '1',
      // Customer_password: "staticpassword",
    });

    //Handling Error case
    if (
      name === '' &&
      mobilenumber === '' &&
      address === '' &&
      email === '' &&
      pincode === ''
    ) {
      message.warning('Please fill all the details');
      return;
    } else {
      if (!name) {
        message.warning('Customer Name should not be empty');
        return;
      }

      if (!mobilenumber) {
        message.warning('Mobile Number should not be empty');
        return;
      }
      if (!address) {
        message.warning('Please Enter Customer Address');
        return;
      }
      if (!email) {
        message.warning('Please Enter E-mail');
        return;
      }
      if (!pincode) {
        message.warning('Please Enter Customer Address pincode');
        return;
      }
    }

    await AXIOS.post(customerAPI.registercustomer, payload)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        message.success('Customer added successfully');
      })
      .catch(function (error) {
        // console.log(error);
        console.log('error', error);
        console.log('error.response', error.response);
        console.log('error.response.data', error.response.data);
        // message.error("There is an error in adding customer. Please try again");
        if (
          error.response &&
          error.response.data &&
          error.response.data.message === 'email already exists'
        ) {
          message.error(
            'Email already exists. Please use a different email address.'
          );
        }
        //  else {
        //   // handle other errors
        //   message.error(
        //     "There is an error in adding customer. Please try again."
        //   );
        // }
      });
  };

  const handleClick = (e) => {
    e.preventDefault();
    console.log('The link was clicked.');
  };

  const swap = (e) => {
    console.log('radio checked', e.target.value);
    setValue(e.target.value);
  };

  //RadioElement
  const [deliveryType, setDeliveryType] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [isSaturdayDelivery, setIsSaturdayDelivery] = useState(false);
  const [isSundayDelivery, setIsSundayDelivery] = useState(false);

  const handleDeliveryTypeChange = (e) => {
    setDeliveryType(e.target.value);
    if (e.target.value === 'Daily') { 
      // setData({
      //   ...data,
      //   // Frequency_of_Delivery: daily,
      // });
    } else if (e.target.value === 'Alternative days') {
      // setData({
      //   ...data,
      //   Frequency_of_Delivery: altdays,
      // });
    } else if (e.target.value === 'select Week days') {
      // setData({
      //   ...data,
      //   Frequency_of_Delivery: weekdays,
      // });
    }
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

  const cardtab = [
    {
      key: 1,
      label: 'Customer Details',
      children: (
        <>
          <div>
            <Row gutter={12}>
              <Col span={8}>
                <Card title="Customer Name" bordered={false}>
                  <Form.Item
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    rules={[
                      {
                        required: true,
                        message: 'Please enter a Product Name',
                      },
                    ]}
                  >
                    <Input placeholder="Customer Name" />
                  </Form.Item>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Customer Phone Number" bordered={false}>
                  <Form.Item
                    name="mobile"
                    value={mobilenumber}
                    onChange={(e) => setMobileNumber(e.target.value)}
                    rules={[
                      {
                        required: true,
                        message: 'Please provide Customer Phone number!',
                      },
                    ]}
                  >
                    <Input placeholder="Customer Mobile Number" />
                  </Form.Item>
                </Card>
              </Col>
              <Col span={8}>
                <Card title="Select Group" bordered={false}>
                  <Space wrap>
                    <Select
                      defaultValue="Default"
                      style={{
                        width: 400,
                      }}
                      onChange={handleChange}
                      options={[
                        {
                          value: 'SmartGroup',
                          label: 'SmartGroup',
                        },
                        {
                          value: 'Default',
                          label: 'Default',
                        },
                        {
                          value: 'adda',
                          label: 'adda',
                        },
                      ]}
                    />
                  </Space>
                </Card>
              </Col>
            </Row>
          </div>
        </>
      ),
    },
    {
      key: 2,
      label: 'Product Details',
      children: (
        <h1>All Products will be assigned to customer automatically.</h1>
      ),
    },
    {
      key: 3,
      label: 'Payment Details',
      children: (
        <>
          <div class="row payment-type-row">
            <div class="col-md-2">
              <span class="payment-type">Payment Type : </span>
              {/* <div
                style={{
                  display: "inline-block",
                  marginLeft: "7%",
                }}
              ></div> */}
              <Space direction="horizontal"></Space>
              <Radio.Group className="radio" onChange={swap} value={value}>
                <Space direction="horizontal">
                  <div>
                    <Radio
                      direction="horizontal"
                      value={1}
                      style={{ marginLeft: '30px', marginTop: '15px' }}
                    >
                      Monthly
                    </Radio>
                  </div>

                  <Radio
                    direction="horizontal"
                    style={{ marginLeft: '80px', width: '190px' }}
                    value={2}
                  >
                    Daily Paying
                  </Radio>
                </Space>
              </Radio.Group>
            </div>
          </div>
          <Checkbox className="checkbox" onChange={onChange}>
            Include Entry In Bill
          </Checkbox>
          <div>
            <h2>Deposit Amount(Not Required)</h2>

            <InputNumber
              className="inputname"
              style={{ float: 'right', right: '400px', top: '-25px' }}
              min={1}
              max={10}
              type="number"
              defaultValue={0}
            />
          </div>
        </>
      ),
    },
    {
      key: 4,
      label: 'Additional Details',
      children: (
        <>
          <span class="delivery-frequency-heading">Delivery Frequency : </span>
          <div>
            <Radio.Group
              onChange={handleDeliveryTypeChange}
              value={deliveryType}
            >
              <Space direction="horizontal">
                <Radio
                  value="Daily"
                  onChange={(e) => {
                    setdelivery(e.target.value);
                    setdaily(e.target.value);
                  }}
                >
                  Daily
                </Radio>
                <Radio
                  value="Alternative days"
                  onChange={(e) => {
                    setdelivery(e.target.value);
                    setaltdays(e.target.value);
                  }}
                >
                  Alternate Day
                </Radio>
                <Radio
                  value="select Week days"
                  onChange={(e) => {
                    setdelivery(e.target.value);
                    setweekdays(e.target.value);
                  }}
                >
                  Select Weekdays
                </Radio>
              </Space>
            </Radio.Group>
            <div style={{ padding: '50px' }}>
              {deliveryType === 'Daily' && (
                <Space direction="horizontal" size={16}>
                  <Input
                    placeholder="Customer Address"
                    size="large"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    style={{
                      marginRight: '60px',
                      // borderColor: "black",
                    }}
                  />
                  <Input
                    placeholder="Customer Email"
                    size="large"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    style={{ marginRight: '60px' }}
                  />
                  <Input
                    placeholder="Customer Pin Code"
                    size="large"
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    style={{ marginRight: '60px' }}
                  />
                </Space>
              )}

              {deliveryType === 'Alternative days' && (
                <Space direction="vertical" size={16}>
                  <DatePicker
                    onChange={handleStartDateChange}
                    // style={{ borderColor: "black" }}
                    size="large"
                  />
                  <Checkbox.Group
                    onChange={(values) =>
                      console.log(`Selected days: ${values}`)
                    }
                    size="large"
                  >
                    <span style={{ marginRight: '50px' }}>
                      Does delivery happens on saturday and / or on sunday?
                    </span>
                    <Checkbox value="saturday">Saturday</Checkbox>
                    <Checkbox value="sunday">Sunday</Checkbox>
                  </Checkbox.Group>
                  <Space size={16}>
                    <Input
                      placeholder="Customer Address"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      // style={{ borderColor: "black" }}
                      size="large"
                    />
                    <Input
                      placeholder="Customer Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // style={{ borderColor: "black" }}
                      size="large"
                    />
                    <Input
                      placeholder="Customer Pin Code"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      // style={{ borderColor: "black" }}
                      size="large"
                    />
                  </Space>
                </Space>
              )}

              {deliveryType === 'select Week days' && (
                <Space direction="vertical" size={16}>
                  <Select
                    defaultValue="Monday"
                    onChange={handleDeliveryDateChange}
                    size="large"
                    // style={{ borderColor: "black" }}
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
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      // style={{ borderColor: "black" }}
                      size="large"
                    />
                    <Input
                      placeholder="Customer Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      // style={{ borderColor: "black" }}
                      size="large"
                    />
                    <Input
                      placeholder="Customer Pin Code"
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      // style={{ borderColor: "black" }}
                      size="large"
                    />
                  </Space>
                </Space>
              )}
            </div>
          </div>
        </>
      ),
    },
  ];

  // const AddedElement = ({ children }) => <p>This is component :{children}</p>;

  return (
    <>
      {/* <AppContent> */}

      <div className="add-customer0">
        <span>Add Customer</span>
      </div>
      <div className="add-customer">
        {/* {[...Array(count)].map((_, i) => (
          <Card key={i}>Hello {i}</Card>
        ))} */}

        {[...Array(count)].map((_, i) => (
          <Card key={i}>
            {/* <h1>Tab {i}</h1> */}
            <Tabs onChange={onChange} type="card" items={cardtab} />
          </Card>
        ))}

        {/* {[...Array(count)].map((_, i) => (
          <AddedElement key={i}>{i}</AddedElement>
        ))} */}
      </div>

      <>
        {/* <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br> */}

        {/* <div className="add more customer button">
          <Button
            className="add_more_customer add-more"
            style={{ backgroundColor: "#175491" }}
            type="button"
            onClick={() => setCount(count + 1)}
          >
            Add More Customers
          </Button>
        </div> */}

        <div className="bottom-border">
          <Button
            type="button"
            className="add-customer-submit-btn"
            style={{ backgroundColor: '#175491' }}
            onClick={handleSubmit}
          >
            Submit
          </Button>

          {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
        </div>
      </>
      {/* </AppContent> */}
    </>
  );
};

export default Customer;
