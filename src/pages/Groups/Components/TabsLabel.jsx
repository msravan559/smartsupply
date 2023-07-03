import { UserOutlined } from "@ant-design/icons";
import { Space } from "antd";

const TabsLabel = (props) => {
  const data = props.data;

  return (
    <div
      className="sidetab"
      style={{
        display: "flex",
        // backgroundColor: "#175491",
        padding: "10px",
      }}
    >
      <div className="sideprofile">
        <Space>
          <UserOutlined />
        </Space>
      </div>
      <div className="name">
        <h3>{data}</h3>
      </div>
    </div>
  );
};
export default TabsLabel;
