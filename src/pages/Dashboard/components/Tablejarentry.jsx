import React, { useState, useEffect } from 'react';

import { Table, Input, Typography, Modal, Button, message } from 'antd';
import dayjs from 'dayjs';
import _ from 'lodash';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

import './TableJarentry.css';
import AXIOS from '../../../http/http-common';
import { customerAPI, productAPI } from '../../../http/apiURL';

const TablejarEntry = (props) => {
  // console.log("props", props);
  const { month, userData, selectedProduct } = props;

  const currentMonth = dayjs().month();

  const navigate = useNavigate();

  // console.log('selectedProduct', selectedProduct);

  // console.log(
  //   'current month',
  //   dayjs().format('MMMM'),
  //   'selectedMon',
  //   // dayjs().month(month).endOf('month'),
  //   // dayjs().date(1),
  //   dayjs(dayjs().month(month - 1)).endOf('month')
  // );

  const [dataSource, setDataSource] = useState([]);
  const [updatedProduct, setUpdatedProduct] = useState('');
  const [loading, setLoading] = useState(true);
  const [showAddCustomerPopup, setShowAddCustomerPopup] = useState(false);
  // const [productdata, setProductData] = useState({});

  const generateDatesByMonth = (date) => {
    // console.log(date.date());
    const today = date;
    const arrDays = [];
    // console.log('today', today);

    for (let i = today.date(); i > 0; i--) {
      const current = today.date(i);

      const isToday = current.isSame(dayjs(), 'day');

      arrDays.push({
        title: (text) => (
          <div className={isToday ? 'today-date' : ''}>
            <div>{isToday ? "TODAY'S DATE" : ''}</div>
            {current.format('DD-MM-YYYY(ddd)')}

            {/* <div>Product Given Per Day : {productGivenPerDay}</div> */}
          </div>
        ),
        width: 200,
        key: current.format('DD-MM-YYYY'),
        dataIndex: current.format('DD-MM-YYYY'),
        render: (text, record) => {
          // console.log("record", record);

          const handleInputChange = (e, type) => {
            // console.log("text", text);
            // console.log("record", record);
            const { value } = e.target;
            // console.log("calling handleInputChange()");
            const calendarDate = current.format('YYYY-MM-DD');

            // const Product_ID =

            const requestBody = {
              [type]: value,
              // Product_ID: record.Product_ID,
              Product_ID: props.selectedProduct.value,
              Store_Id: record.Store_Id,
              Customer_ID: record.customer_ID,
              Calender_Date: calendarDate,
            };
            // console.log("value", value);

            if (type === 'Product_Out') {
              requestBody['Product_In'] = text.Productin;
            }

            // console.log('text', requestBody);

            // AXIOS.post(productAPI.insert, requestBody).then(({ data }) => {
            //   console.log(data);
            // });

            setUpdatedProduct(requestBody);
            // console.log(requestBody);
          };

          if (record.hasinput) {
            return (
              // <form onSubmit={handleFormSubmit}>
              <div>
                <Input
                  className="passin"
                  placeholder="In"
                  style={{
                    width: 80,
                    marginLeft: 8,
                    backgroundColor: '#e2f4f7',
                  }}
                  defaultValue={text && text.Productin !== 0 && text.Productin}
                  // value={text && text.Productin}
                  onChange={(e) => handleInputChange(e, 'Product_In')}
                />
                <Input
                  className="passout"
                  placeholder="Out"
                  style={{
                    width: 80,
                    marginLeft: 8,
                    backgroundColor: '#d3d3d3',
                  }}
                  defaultValue={
                    text && text.Productout !== 0 && text.Productout
                  }
                  onChange={(e) => handleInputChange(e, 'Product_Out')}
                />
              </div>
              //   <button type="submit" style={{ display: "none" }}>
              //     Submit
              //   </button>
              // </form>
            );
          } else {
            return (
              <span style={{ marginLeft: '40px' }}>
                {text ? text.Productgivenperday : '--'}
              </span>
            );
          }
        },
      });
    }

    return arrDays;
  };

  const startDate = dayjs(dayjs().month(month - 1))
    .startOf('month')
    .format('YYYY-MM-DD');
  let endDate = dayjs(dayjs().month(month - 1))
    .endOf('month')
    .format('YYYY-MM-DD');

  if (currentMonth === month - 1) {
    endDate = dayjs().format('YYYY-MM-DD');
  }

  // console.log(
  //   'startDate',
  //   startDate.format('DD-MM-YYYY'),
  //   'enddate',
  //   endDate.format('DD-MM-YYYY')
  // );

  const dates = generateDatesByMonth(
    currentMonth === month - 1
      ? dayjs()
      : dayjs(dayjs().month(month - 1)).endOf('month')
  );

  // console.log('dates', dates);

  const columns = [
    {
      title: 'Customer Name',
      hasinput: true,
      width: 150,
      dataIndex: 'name',
      key: 'name',
      fixed: 'left',
    },
    {
      title: 'Product Balance',
      hasinput: true,
      width: 100,
      dataIndex: 'productBalance',
      key: 'productBalance',
      fixed: 'left',
    },
    ...dates,

    {
      title: 'Total Product In/Out',
      key: 'totalProduct',
      fixed: 'right',
      width: 200,
      hasinput: true,
      render: (text, record) =>
        // console.log("text total productin", text),
        record.hasinput ? (
          // console.log(record.hasinput),
          <>
            <Input
              className="passin"
              placeholder="In"
              style={{ width: 80, marginLeft: 8, backgroundColor: '#e2f4f7' }}
              value={text && text.totalproductin}
            />
            <Input
              className="passout"
              placeholder="Out"
              style={{ width: 80, marginLeft: 8, backgroundColor: '#d3d3d3' }}
              value={text && text.totalproductout}
            />
          </>
        ) : (
          <span style={{ marginLeft: '50px' }}>-</span>
        ),
    },
    // {
    //   title: "Action",
    //   width: 100,
    //   hasinput: false,
    //   fixed: "right",
    // },
  ];

  // const myFunction = () => {
  //   // your logic here
  //   alert('Clicked enter key');
  //   // console.log("pressed Enter ✅");
  //   console.log('updatedProduct', updatedProduct);
  //   if (updatedProduct) {
  //     alert('pressed Enter ✅');
  //   } else {
  //     alert('No data');
  //   }
  // };

  useEffect(() => {
    if (updatedProduct) {
      AXIOS.post(productAPI.insert, updatedProduct).then(({ data }) => {
        console.log('data', data);
        setLoading(true);
        fetchData();
        if (data.success === true) {
          message.success('Jar Entry Added');
        } else {
          message.error('There is an Error In Network');
        }

        // window.location.reload();
      });
    }
  }, [updatedProduct]);

  //Api
  // fetch data from both APIs and update dataSource state
  const fetchData = async () => {
    // console.log("customer", customerResponse);

    let _customerResponse;

    try {
      const { data: customerResponse } = await AXIOS.get(
        `${customerAPI.getallcustomers}?Store_Id=${userData.Store_Id}`
      );
      _customerResponse = customerResponse;
    } catch (error) {
      setShowAddCustomerPopup(true);
      setLoading(false);
      return;
    }

    const dateQuery = `start_date=${startDate}&end_date=${endDate}`;
    const query = `${dateQuery}&Product_ID=${selectedProduct.value}&Store_ID=${userData.Store_Id}`;

    let inOutResponse;
    let _perDayResponse;

    try {
      // Try to fetch data from getinandout API
      const response = await AXIOS.get(`${productAPI.getinandout}?${query}`);
      inOutResponse = response.data;

      const { data: perDayResponse } = await AXIOS.get(
        `${productAPI.getproductgivenperday}?${query}`
      );
      _perDayResponse = perDayResponse;
    } catch (error) {
      // Handle case where API call fails
      inOutResponse = { data: [] };
      _perDayResponse = { data: [] };
    }

    const customerData =
      _customerResponse &&
      _customerResponse.data.map((item) => ({
        key: uuidv4(),
        id: item.Customer_ID,
        name: item.Customer_name,
        customer_ID: item.Customer_ID,
        Store_Id: item.Store_Id,
        hasinput: true,
        productBalance: null,
        totalproductin: null,
        totalproductout: null,
      }));

    let inOutData = [];
    if (inOutResponse.data.length > 0) {
      inOutData = inOutResponse.data.map((item) => {
        const row = {
          key: uuidv4(),
          productBalance: item.Total_Product_Balance,
          totalproductin: item.Total_Product_In,
          totalproductout: item.Total_Product_Out,
          customer_ID: item.Customer_ID,
          store_Id: item.Store_Id,
          hasinput: true,
        };

        item.Dates.forEach((date) => {
          row[date.Calender_Date] = {
            Productin: date.Product_In === 0 ? null : date.Product_In,
            Productout: date.Product_out === 0 ? null : date.Product_out,
          };
        });

        return row;
      });
    } else {
      // If getinandout API call returns empty response, create empty rows for each customer
      inOutData = customerData.map((customer) => ({
        key: uuidv4(),
        productBalance: null,
        totalproductin: null,
        totalproductout: null,
        customer_ID: customer.id,
        Store_Id: customer.Store_Id,
        hasinput: true,
      }));
    }

    // combine data from both APIs
    const combinedData = customerData.map((customer) => {
      // console.log("customer", customer);
      const inOutRow = inOutData.find(
        (item) => item.customer_ID === customer.id
      );
      return { ...customer, ...inOutRow };
    });

    const productPerDayObj = {
      name: (
        <Typography.Title level={5} style={{ fontWeight: 'bolder' }}>
          Product Given Per Day
        </Typography.Title>
      ),
      hasinput: false,
      productBalance: '-',
      totalProduct: '-',
      dataIndex: 'productBalance',
      key: 'productBalance',
    };

    // console.log('perDayResponse', perDayResponse);

    if (_perDayResponse) {
      _.map(_perDayResponse.data, (item) => {
        productPerDayObj[item.Calender_Date] = item;
      });
    }

    combinedData.push(productPerDayObj);

    setLoading(false);
    setDataSource(combinedData);
  };

  // useEffect(() => {
  //   fetchData();
  // }, []);

  useEffect(() => {
    if (selectedProduct) {
      setLoading(true);
      fetchData();
    }
  }, []);

  const handleOk = () => {
    navigate('/customer');
  };

  return (
    <div>
      <Table
        loading={loading}
        columns={columns}
        dataSource={dataSource}
        // scroll={{ y: 300 }}
        scroll={{ x: 400 }}
        pagination={false}
      />
      {/* popup to add new customer */}
      <Modal
        title="Add Customer"
        open={showAddCustomerPopup}
        onCancel={() => setShowAddCustomerPopup(false)}
        footer={null}
        style={{ marginTop: 160 }}
        width={600}
      >
        <div style={{ fontWeight: 'bolder', marginTop: 25, marginLeft: 40 }}>
          No Customers Found in this Store, Please Add the Customers!!!
        </div>
        <Button
          onClick={handleOk}
          style={{
            marginLeft: 150,
            marginTop: 30,
            borderColor: 'black',
            border: '5',
            fontWeight: 'bolder',
          }}
          className="click"
        >
          Click Here To Add Customer
        </Button>
      </Modal>
    </div>
  );
};

export default TablejarEntry;
