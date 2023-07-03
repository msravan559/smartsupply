import React, { useState } from "react";

import theme from "../../theme/theme";
import PaymentSelector from "./Components/PaymentSelector";
import PaymentTable from "./Components/PaymentTable";
import { AppContent } from "../../layouts";
import {
  Button,
  Divider,
  Radio,
  Space,
  Select,
  AutoComplete,
  Input,
  Row,
  Col,
} from "antd";

const getRandomInt = (max, min = 0) =>
  Math.floor(Math.random() * (max - min + 1)) + min;

const handleChange = (value) => {
  console.log(`selected ${value}`);
};

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

const width = `calc(100% - ${theme.layout.padding * 2}px)`;

const Payment = () => {
  const [options, setOptions] = useState([]); // default is 'middle'

  const handleSearch = (value) => {
    setOptions(value ? searchResult(value) : []);
  };

  const onSelect = (value) => {
    console.log("onSelect", value);
  };

  return (
    <>
      <AppContent style={{ overflow: "hiddden" }}>
        <Row>
          <PaymentSelector />

          <Space wrap>
            <Select
              defaultValue="Filter"
              style={{
                width: 200,
                display: "inline-block",
                marginLeft: "30%",
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
                marginLeft: "40%",
              }}
              options={options}
              onSelect={onSelect}
              onSearch={handleSearch}
            >
              <Input.Search size="Middle" placeholder="Search" enterButton />
            </AutoComplete>
          </Space>
        </Row>

        <Row style={{ marginTop: 40 }}>
          <Col span={24}>
            {" "}
            <div className="add_payment_table">
              <span>
                <PaymentTable />
              </span>
            </div>
          </Col>
        </Row>
      </AppContent>
    </>
  );
};
export default Payment;
