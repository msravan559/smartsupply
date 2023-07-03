import { Button, Modal } from "antd";

import { useState } from "react";

import { UserOutlined, DeleteOutlined } from "@ant-design/icons";

import "../Groups.css";
import SearchComponent from "./SearchComponent";
import { useAppSelector } from "../../../hooks";
import { selectGroup } from "../../../features/group/groupSlice";
import { Loader } from "../../../shared/components";

const GroupMemberProfile = ({ name }) => {
  return (
    <div
      className="groupmembersdata"
      style={{
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="groupsprofile">
        <UserOutlined />
      </div>
      <div
        className="groupmemebernames"
        style={{
          paddingLeft: 10,
          fontSize: "17px",
        }}
      >
        <h2>{name}</h2>
      </div>
    </div>
  );
};

const TabsChildren = () => {
  // console.log(customerDetails);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [groupName, setGroupName] = useState("");

  const { data: groupCustomers, error, loading } = useAppSelector(selectGroup);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (groupCustomers.data && groupCustomers.data.length == 0) {
    return <h2>No Customer Found, please add Customer</h2>;
  }

  return (
    <div className="tabschildren" style={{ color: "white" }}>
      <SearchComponent
        customerDetails={groupCustomers.data && groupCustomers.data}
        groupId={groupCustomers.groupId}
      />

      {groupCustomers.data.map((ele, i) => {
        return (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "10px 0",
              margin: "0px 0px 5px 0px",
              backgroundColor: "#175491",
            }}
          >
            <GroupMemberProfile name={ele.Customer_Name} />

            <div
              className="membersdelebtn"
              style={{
                padding: "0 10px",
              }}
            >
              <Button
                danger
                style={{ backgroundColor: "transparent" }}
                onClick={() => {
                  showModal();
                  setTitle(ele.Customer_Name);
                  setGroupName(ele.Group_Name);
                }}
              >
                <DeleteOutlined />
              </Button>
            </div>
          </div>
        );
      })}
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <p>
          Are you sure you want to remove this customer from the group -
          {groupName}?
        </p>
      </Modal>
    </div>
  );
};

export default TabsChildren;
