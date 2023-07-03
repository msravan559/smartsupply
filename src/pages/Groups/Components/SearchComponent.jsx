import { Button, Modal } from "antd";

import { useEffect, useState } from "react";

import {
  UserOutlined,
  DeleteOutlined,
  SearchOutlined,
  FormOutlined,
} from "@ant-design/icons";

import "../Groups.css";
// import AXIOS from "../../../http/http-common";
// import { groupsAPI } from "../../../http/apiURL";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import {
  deleteGroupId,
  getAllGroups,
} from "../../../features/group/groupAction";
import {
  clearData,
  selectDeleteGroup,
} from "../../../features/group/groupSlice";

const EditButton = ({ groupId }) => {
  const storeId = sessionStorage.storeId;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [groupName, setGroupName] = useState("");

  function handleEdit() {
    // AXIOS.get(`${groupsAPI.getallgroups}?Store_Id=${storeId}`)
    //   .then(({ data }) => {
    //     if (data.success === true) {
    //       // console.log("success", data);
    //       let group = data.data.filter(
    //         (ele) => ele.Group_ID == groupId.current
    //       );
    //       group[0].Group_Name = "pavan1";
    //       console.log(group);
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     // Logic
    //   });
  }
  // console.log(groupName);
  return (
    <div>
      <Button
        danger
        style={{
          margin: "5px",
          height: "40px",
          width: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
        onClick={() => {
          showModal();
        }}
      >
        <FormOutlined />
      </Button>
      <Modal
        title="Update Group Name"
        open={isModalOpen}
        onOk={() => (handleOk(), handleEdit())}
        onCancel={handleCancel}
      >
        <input
          type="text"
          placeholder="Enter New Name"
          value={groupName}
          onChange={(e) => setGroupName(e.target.value)}
        />
      </Modal>
    </div>
  );
};

const SearchComponent = ({ customerDetails, groupId }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useAppDispatch();

  const storeId = sessionStorage.storeId;

  const {
    data: deleteGroupData,
    error,
    loading,
  } = useAppSelector(selectDeleteGroup);

  const handleDelete = () => {
    dispatch(deleteGroupId(groupId));

    // AXIOS.delete(`${groupsAPI.deletegroupbyid}/${groupId.current}`)
    //   .then(({ data }) => {
    //     if (data.success === true) {
    //       console.log("data.success", data.success);
    //       getAllGroups();
    //     }
    //   })
    //   .catch((error) => {
    //     console.log("error", error);
    //     // Logic
    //   });
  };

  useEffect(() => {
    if (deleteGroupData) {
      dispatch(getAllGroups(`Store_Id=${storeId}`));
      dispatch(clearData({ type: "DELETEGROUP" }));
    }
  }, [dispatch, deleteGroupData, storeId]);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const groupName = customerDetails[0].Group_Name;

  return (
    <div
      className="searchbar"
      style={{ display: "flex", alignItems: "center" }}
    >
      <div className="options">
        <div className="nameeditdeletebtn" style={{ display: "flex" }}>
          <h4 style={{ color: "blue", fontSize: "18px", margin: "5px" }}>
            {groupName}
          </h4>
          <EditButton groupId={groupId} />

          {groupId !== 1 && (
            <Button
              danger
              style={{
                margin: "5px",
                height: "40px",
                width: "40px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              onClick={() => {
                showModal();
              }}
            >
              <DeleteOutlined />
            </Button>
          )}
        </div>
        <div className="totalcustomers">
          <h3 style={{ color: "gray" }}>
            (Total {customerDetails.length} Customers)
          </h3>
        </div>
      </div>
      <div className="searchengine" style={{ marginLeft: "400px" }}>
        <input
          type="text"
          placeholder="Search Customer"
          style={{ height: "35px" }}
        />
        <button>
          <SearchOutlined
            style={{
              height: "30px",
              width: "25px",
            }}
          />
        </button>
      </div>

      <Modal
        title={"Delete Group"}
        open={isModalOpen}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <p>
          Are you Sure you want to delete this Group -{" "}
          <strong>{groupName}</strong>?
        </p>
      </Modal>
    </div>
  );
};

export default SearchComponent;
