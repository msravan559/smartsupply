import { Form, Input, Button, message, Row, Col } from "antd";
import { Card, Image } from "antd";
import Link from "antd/es/typography/Link";
import { assets } from "../../constants";
import { useNavigate } from "react-router-dom";

import { useState } from "react";

import { AppName, Spacer } from "../../shared/components";
import { storeAPI } from "../../http/apiURL";
import AXIOS from "../../http/http-common";

const styles = {
  heading: {
    textDecoration: "underline",
    marginLeft: 200,
    fontWeight: "bolder",
  },
};

const StoreRegistrationPage = () => {
  const navigate = useNavigate();
  const [name, setname] = useState("");
  const [type, settype] = useState("");
  const [address, setaddress] = useState("");
  const [signupComplete, setSignupComplete] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setemail] = useState("");
  const [supply, setsupply] = useState("");
  const [url, seturl] = useState("");
  const [gst, setgst] = useState("");

  if (
    name === "" &&
    type === "" &&
    address === "" &&
    phoneNumber === "" &&
    email === "" &&
    supply === "" &&
    url === "" &&
    gst === ""
  ) {
    message.warning("Please Fill the All Details");
    return;
  } else {
    if (!name) {
      message.warning("Name should not be empty");
      return;
    }
    if (!type) {
      message.warning("Please Enter Your Store Type");
      return;
    }
    if (!address) {
      message.warning("Please Enter Your Store Address");
      return;
    }

    if (!phoneNumber) {
      message.warning("Enter Your Mobile Number");
      return;
    }
    if (!email) {
      message.warning("Phone Enter E-mail for Your Store");
      return;
    }
    if (!supply) {
      message.warning("Phone Enter Location That Your Store Supply");
      return;
    }
    if (!url) {
      message.warning("Phone Enter Your URL Website");
      return;
    }
    if (!gst) {
      message.warning("Phone Enter Store GST");
      return;
    }
  }

  //get Client_ID in sessionStorage that is stored in signupclient component
  const Client_ID = sessionStorage.getItem("Client_ID");

  const onFinish = async (values) => {
    values.preventDefault();
    try {
      const response = await AXIOS.post(storeAPI.storeregister, {
        Client_ID: Client_ID,
        Store_name: name,
        Store_type: type,
        Store_address: address,
        Store_phonenumber: phoneNumber,
        Store_email: email,
        Location_of_Supply: supply,
        Website_URL: url,
        Store_GSTIN: gst,
      });
      console.log(response.data);
      // TODO: handle successful signup
      setSignupComplete(true);
      message.success("Signup Successful");
      navigate("/login");
    } catch (error) {
      message.error("Failed to register store.");
    }
  };

  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{ height: "100%", overflow: "scroll" }}
      >
        <Col xs={18} sm={16} md={12} lg={10}>
          <Card className="cardcolor" style={{ backgroundColor: "#fffff" }}>
            <Image src={assets.customerLogo} preview={false} width={250} />
            <AppName className="fw-400 mb-0" level={5} />

            <Spacer height={20} />
            <h1 style={styles.heading}>Register Your Store</h1>
            <Spacer height={20} />
            <Form onSubmit={onFinish}>
              <Form.Item
                label="Store Name"
                id="Store_name"
                name="Store_name"
                onChange={(e) => setname(e.target.value)}
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  style={{ width: 350, marginLeft: 62 }}
                  placeholder="Enter Your Store name"
                />
              </Form.Item>
              <Form.Item
                label="Store Type"
                id="Store_type"
                name="Store_type"
                onChange={(e) => settype(e.target.value)}
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  style={{ width: 350, marginLeft: 70 }}
                  placeholder="Enter Your Store Type"
                />
              </Form.Item>
              <Form.Item
                label="Store Address"
                id="Store_address"
                name="Store_address"
                onChange={(e) => setaddress(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input
                  style={{ width: 350, marginLeft: 48 }}
                  placeholder="Enter Your Store address"
                />
              </Form.Item>
              <Form.Item
                label="Store Phone Number"
                id="Store_phonenumber"
                name="Store_phonenumber"
                onChange={(e) => setPhoneNumber(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input
                  style={{ width: 350, marginLeft: 2 }}
                  placeholder="Enter Your Store mobilenumber"
                />
              </Form.Item>
              <Form.Item
                label="Store Email"
                name="Store_email"
                id="Store_email"
                onChange={(e) => setemail(e.target.value)}
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  style={{ width: 350, marginLeft: 65 }}
                  placeholder="Enter Your Store e-mail"
                />
              </Form.Item>
              <Form.Item
                label="Location of Supply"
                id="Location_of_Supply"
                name="Location_of_Supply"
                onChange={(e) => setsupply(e.target.value)}
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input
                  style={{ width: 350, marginLeft: 18 }}
                  placeholder="Enter Your Store location of supply"
                />
              </Form.Item>
              <Form.Item
                label="Website URL"
                id="Website_URL"
                name="Website_URL"
                onChange={(e) => seturl(e.target.value)}
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  style={{ width: 350, marginLeft: 55 }}
                  placeholder="Enter Your Website URL"
                />
              </Form.Item>
              <Form.Item
                label="Store GSTIN"
                name="Store_GSTIN"
                id="Store_GSTIN"
                onChange={(e) => setgst(e.target.value)}
                rules={[{ required: true, message: "" }]}
              >
                <Input
                  style={{ width: 350, marginLeft: 60 }}
                  placeholder="Enter Your Store Store_GSTIN"
                />
              </Form.Item>

              <Form.Item>
                <Link
                  href="/login"
                  style={{ color: "#007bff", fontWeight: "bolder" }}
                >
                  if you have already registred click here to Login
                </Link>
              </Form.Item>
              <Form.Item>
                <Button
                  onClick={onFinish}
                  href="/login"
                  to="/login"
                  type="primary"
                  htmlType="submit"
                >
                  Register Store
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </>
  );
};

export default StoreRegistrationPage;
