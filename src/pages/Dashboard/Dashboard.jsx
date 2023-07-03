import React, { useState, useEffect } from "react";

import { Space, AutoComplete, Input } from "antd";
import { LeftSquareTwoTone, RightSquareTwoTone } from "@ant-design/icons";
import dayjs from "dayjs";

import { AppContent } from "../../layouts";
import MonthSelector from "./components/MonthSelector";
import Tablejarentry from "./components/Tablejarentry";

import { Select } from "antd";

import { productAPI } from "../../http/apiURL";
import AXIOS from "../../http/http-common";

const { option } = Select;

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const searchResult = (query) =>
  new Array(getRandomInt(5))
    .join(".")
    .split(".")
    .map((_, idx) => {
      const category = `${query}${idx}`;
      return {
        value: category,
        label: (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <span>
              Found {query} on{" "}
              <a
                href={`https://s.taobao.com/search?q=${query}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {category}
              </a>
            </span>
            <span>{getRandomInt(200, 100)} results</span>
          </div>
        ),
      };
    });

// const width = `calc(100% - ${theme.layout.padding * 2}px)`;

const Dashboard = () => {
  const [month, setMonth] = useState(dayjs().format("M"));
  const [loading, setLoading] = useState(true);
  // const [size, setSize] = useState('large');
  const [products, setProducts] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const userData = JSON.stringify(sessionStorage.userData);

  // console.log("userData", userData);

  const handleSearch = (value) => {
    // setOptions(value ? searchResult(value) : []);
  };

  const handleChange = (value, option) => {
    setSelectedProduct(option);
  };

  useEffect(() => {
    AXIOS.get(`${productAPI.getall}?Store_Id=${userData.Store_Id}`)
      .then(({ data }) => {
        const options = data.data.map((item) => ({
          value: item.Product_ID,
          label: item.Product_Name,
        }));

        setSelectedProduct(options[0]);
        setProducts(options);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  return (
    <AppContent>
      <>
        <div className="row page_options" style={{ marginLeft: 0 }}>
          <MonthSelector month={month} setMonth={setMonth} />

          <div
            style={{
              display: "inline-block",
              marginLeft: "7%",
            }}
          >
            {/* select dropdown1 */}
            <Space wrap>
              <span style={{ fontWeight: "bolder" }}>Product Name:</span>
              <Select
                defaultValue={products && products[0]}
                style={{
                  width: 120,
                }}
                onChange={handleChange}
                options={products}
                value={selectedProduct}
                // getOptionLabel={(option) => option.label}
              />
              {/* <LeftSquareTwoTone style={{ fontsize: "100%" }} /> */}
              {/* <h6>page 1 of 1 search results </h6> */}
              {/* <RightSquareTwoTone style={{ fontsize: "100%" }} /> */}
              <div
                style={{
                  display: "inline-block",
                  marginLeft: "17%",
                }}
              ></div>
              <Space style={{ marginLeft: 80 }}>
                <Select
                  defaultValue="Filter"
                  style={{
                    width: 200,
                  }}
                  onChange={handleChange}
                  options={[
                    {
                      label: "Payment Mode",
                      options: [
                        {
                          label: "Fixed Monthly",
                          value: "fixed monthly",
                        },
                        {
                          label: "Daily Payment",
                          value: "daily payment",
                        },
                        {
                          label: "Monthly Basis",
                          value: "monthly basis",
                        },
                      ],
                    },
                    {
                      label: "Groups",
                      options: [
                        {
                          label: "Default",
                          value: "default",
                        },
                        {
                          label: "Adda",
                          value: "adda",
                        },
                      ],
                    },
                  ]}
                />
                {/* search input */}
                <AutoComplete
                  dropdownMatchSelectWidth={252}
                  style={{
                    width: 250,
                    display: "inline-block",
                    marginLeft: "7%",
                  }}
                  options={null}
                  onSelect={onSelect}
                  onSearch={handleSearch}
                >
                  <Input.Search
                    size="Middle"
                    placeholder="Search"
                    enterButton
                    style={{ marginLeft: 70 }}
                  />
                </AutoComplete>
              </Space>
            </Space>

            <div className="row">
              <div className="col-md-4"></div>
              <div className="col-md-4">
                <p className="results_count">
                  <span aria-hidden="true" className="clear-filter"></span>
                </p>
              </div>
              <div className="col-md-4"></div>
            </div>

            <div className="row sumbit-entry-heading">
              <span>
                {" "}
                Enter Product In and Out Below .Use Arrow keys to Navigate
                Between Dates and Customers .{" "}
                {/* Press 'Enter'{" "}
               
                for submit the Entries.Use arrow keys{" "} */}
                {/* <img
              class="arrow-navigation-img"
              src="/static/images/arrow-50.png"
            ></img>{' '} */}
                {/* to navigate between dates and customers */}
              </span>
            </div>
          </div>
        </div>
        <>
          <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
              <p className="results_count">
                <span aria-hidden="true" className="clear-filter"></span>
              </p>
            </div>
            <div className="col-md-4"></div>
          </div>

          <Tablejarentry
            month={month}
            userData={userData}
            selectedProduct={selectedProduct}
            loading={loading}
            setLoading={setLoading}
          />
        </>
      </>
    </AppContent>
  );
};

export default Dashboard;
