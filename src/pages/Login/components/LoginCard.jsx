import React from "react";

import { Card, Image } from "antd";

import { assets } from "../../../constants";

import { AppName, Spacer } from "../../../shared/components";
import LoginForm from "./LoginForm";

const LoginCard = () => {
  return (
    <Card className="cardcolor" style={{ backgroundColor: "#fffff" }}>
      <div style={{ textAlign: "center" }}>
        <Image src={assets.customerLogo} preview={false} width={250} />
        <AppName className="fw-400 mb-0" level={5} />
      </div>

      <Spacer height={40} />

      <LoginForm />
    </Card>
  );
};

export default LoginCard;
