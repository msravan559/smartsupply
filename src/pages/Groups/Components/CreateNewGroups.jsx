import { useEffect, useState } from "react";

import AXIOS from "../../../http/http-common";
import { customerAPI } from "../../../http/apiURL";

import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

import theme from "../../../theme/colors";

import "../Groups.css";

const CustomerDetails = ({ customer, groupsData, groupObj }) => {
  // const groupsData = props.groupsData;
  // const customer = props.customer;
  // console.log(props);
  // console.log(groupsData);
  // console.log(customer);

  // groupObj[1234] = "ssdff";
  // console.log(groupObj);

  // console.log("groupObj", groupObj);

  const group = groupsData.filter((group) => {
    return group.Group_ID === customer.Group_ID;
  });

  // const groupName = group.length > 0 ? group[0].Group_Name : null;
  const groupName = groupObj[customer.Group_ID];

  return (
    <div
      className="customerdetails"
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        color: "black",
        margin: "5px",
        background: "white",
      }}
    >
      <div
        className="profilename"
        style={{ display: "flex", marginLeft: "40px" }}
      >
        <div className="profile1">
          <UserOutlined width={"10px"} />
        </div>
        <div className="name" style={{ marginLeft: "20px" }}>
          <h1>{customer.Customer_name}</h1>
          <h4 style={{ color: "red" }}>
            Already added to the Group Name-{groupName}
          </h4>
        </div>
      </div>
      <div className="mobileno">
        <h2>N/A</h2>
      </div>
      <div className="checkboxbtn" style={{ marginRight: "45px" }}>
        <Checkbox></Checkbox>
      </div>
    </div>
  );
};

const CreateNewGroups = (props) => {
  const groupsData = props.groupsData;

  // console.log(groupsData);
  const [customersData, setCustomersData] = useState([]);

  // const storeId = sessionStorage.storeId;
  const groupObj = {};
  groupsData &&
    groupsData.map((group) => (groupObj[group.Group_ID] = group.Group_Name));

  // console.log(groupObj);

  const getAllCustomers = () => {
    AXIOS.get(
      `${customerAPI.getallcustomers}?Store_Id=${sessionStorage.storeId}`
    )
      .then(({ data }) => {
        setCustomersData(data.data);
        // console.log("baby", data);
      })
      .catch((error) => {
        console.log("error", error);
        // Logic
      });
  };

  useEffect(() => {
    // getAllCustomers();
  }, []);

  return (
    <div className="newgroups">
      {/* <h1>Hello</h1> */}
      <div
        className="entergroupname"
        style={{
          // background: theme.colorBlue,
          padding: "25px",
          margin: "5px",
          border: "1px solid black",
        }}
      >
        {/* <input
          type="text"
          placeholder="Enter Group Name"
          style={{ width: "20rem" }}
        /> */}
        <button>Add Groups</button>
      </div>
      <div
        className="searchCustomer"
        style={{
          background: theme.colorBlue,
          padding: "25px",
          margin: "5px",
        }}
      >
        <input type="text" placeholder="Search Customer" />
        <button>
          <SearchOutlined />
        </button>
      </div>
      <div className="searchcustomer"></div>
      {customersData.map((customer) => (
        <CustomerDetails
          customer={customer}
          key={customer.Customer_ID}
          groupsData={groupsData}
          groupObj={groupObj}
        />
      ))}
    </div>
  );
};
export default CreateNewGroups;
