//Signup Client

import { useState } from "react";
// import styles from "./Signupclient.css";
import { Button, Form, Input, message, Col, Row } from "antd";
import Link from "antd/es/typography/Link";
import { Card, Image } from "antd";
import { assets } from "../../constants";
import { useNavigate } from "react-router-dom";

import { AppName, Spacer } from "../../shared/components";
import AXIOS from "../../http/http-common";
import { authAPI } from "../../http/apiURL";
const styles = {
  heading: {
    textDecoration: "underline",
    marginLeft: 130,
    fontWeight: "bolder",
  },
};

function SignupClient() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [signupComplete, setSignupComplete] = useState(false);
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [status, setStatus] = useState("");
  // const [Client_ID, setStoreId] = useState("");

  const navigate = useNavigate();
  // const Client_ID = JSON.parse(sessionStorage.userData);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      message.warning("Passwords do not match");
      return;
    }
    // if (!name || !phoneNumber || !status) {
    //   message.warning("Please provide all details");
    //   return;
    // }

    // const newStoreId = parseInt(Math.random() * 1000000); // generate a new, random integer Store_Id
    // setStoreId(newStoreId);
    if (name === "" && email === "" && password === "" && phoneNumber === "") {
      message.warning("Please fill the form");
      return;
    } else {
      if (!name) {
        message.warning("Name should not be empty");
        return;
      }
      if (!email) {
        message.warning("Please Enter E-mail");
        return;
      }
      if (!password) {
        message.warning("Please Enter Your Password");
        return;
      }
      if (!confirmPassword) {
        message.warning("Please Enter Your Confirm Password");
        return;
      }
      if (!phoneNumber) {
        message.warning("Enter Your Mobile Number");
        return;
      }
      if (!phoneNumber < 10) {
        message.warning("Phone Number Must be 10 Digits");
      }
    }

    try {
      const response = await AXIOS.post(authAPI.clientregister, {
        // Store_Id: Client_ID,
        Client_email: email,
        Client_password: password,
        Client_name: name,
        Client_phonenumber: phoneNumber,
        Client_status: "Active",
      });
      console.log(response.data);

      // Storing the Client_ID in session storage
      sessionStorage.setItem("Client_ID", response.data.data);
      // TODO: handle successful signup
      setSignupComplete(true);
      message.success("Signup Successful");
      navigate("/storeregister");
    } catch (error) {
      console.error(error);
      console.log("error", error);
      console.log("error.response", error.response);
      console.log("error.response.data", error.response.data);
      // message.error("There is an error in adding customer. Please try again");
      if (
        error.response &&
        error.response.data &&
        error.response.data.message === "email already exists"
      ) {
        message.warning(
          "Email already exists. Please use a different email address."
        );
      } else if (
        error.response &&
        error.response.data &&
        error.response.data.message === "Mobile number should be 10 digit"
      ) {
        message.warning("Mobile Number Must Be 10 Digits");
      }
      // TODO: handle signup error
      else {
        // message.error("There is an Error In Network Try Again");
      }
      //
    }
  };

  return (
    <>
      <Row
        align="middle"
        justify="center"
        style={{ height: "100%", overflow: "scroll" }}
      >
        <Col xs={18} sm={16} md={12} lg={7}>
          <div>
            <Card className="cardcolor" style={{ backgroundColor: "#fffff" }}>
              <Image src={assets.customerLogo} preview={false} width={250} />
              <AppName className="fw-400 mb-0" level={5} />

              <Spacer height={20} />
              <Form onSubmit={handleSubmit} style={styles.form}>
                <Form onSubmit={handleSubmit} style={styles.form}>
                  <h2 style={styles.heading}>Signup As Client</h2>
                  <Spacer height={15} />
                  <div style={styles.inputGroup}>
                    <Form.Item htmlFor="name" style={styles.label}>
                      Name
                      <Input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        style={styles.input}
                      />
                    </Form.Item>
                  </div>
                  <div style={styles.inputGroup}>
                    <Form.Item htmlFor="email" style={styles.label}>
                      Email
                      <Input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        style={styles.input}
                      />
                    </Form.Item>
                  </div>
                  <div style={styles.inputGroup}>
                    <Form.Item htmlFor="password" style={styles.label}>
                      Create Password
                      <Input.Password
                        placeholder="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        style={styles.input}
                      />
                    </Form.Item>
                  </div>
                  <div style={styles.inputGroup}>
                    <Form.Item
                      name="re-enter password"
                      htmlFor="confirmPassword"
                      style={styles.label}
                    >
                      Confirm Password
                      <Input.Password
                        placeholder="Password"
                        type="password"
                        id="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        style={styles.input}
                      />
                    </Form.Item>
                  </div>
                  <div style={styles.inputGroup}>
                    <Form.Item htmlFor="phoneNumber" style={styles.label}>
                      Phone Number
                      <Input
                        type="text"
                        id="phoneNumber"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        style={styles.input}
                      />
                    </Form.Item>
                  </div>

                  <Button
                    onClick={handleSubmit}
                    to="/storeregister"
                    href="/storeregister"
                    type="primary"
                    htmlType="submit"
                    style={styles.button}
                  >
                    Signup
                  </Button>
                  <Link
                    href="/login"
                    style={{
                      marginLeft: "70px",
                      color: "#007bff",
                      fontWeight: "bolder",
                    }}
                  >
                    Back to Login
                  </Link>
                </Form>
              </Form>
            </Card>
          </div>
        </Col>
      </Row>
    </>
  );
}
export default SignupClient;
