import React from "react";
import { Route, useNavigate } from "react-router-dom";
import "./Page1.css";
import Link from "antd/es/typography/Link";
import Login from "../Login/Login";
import BusinessApp from "../Page1/Components/BusinessApp";

function Page1() {
  const [showLogin, setShowLogin] = React.useState(false);

  const navigate = useNavigate();

  const handleBusinessLoginClick = () => {
    setShowLogin(true);
    navigate.push("/login");
    console.log("businesslogin clicked");
  };

  return (
    <header>
      <div className="topnav" id="myTopnav">
        <div className="left-side-header ">
          <a href="/">
            {" "}
            <img src="favicon-logo.png" className="logo" />
          </a>
          <a onClick={() => {}} className="icon">
            <i className="fa fa-bars"></i>
          </a>
          <Link href="/" className="header_active">
            Business App
          </Link>

          <Link
            href="/customerapp"
            to=""
            style={{ color: "#38c6f4", marginTop: "25px" }}
          >
            Customer App
          </Link>
          <Link
            href="/eventapp"
            style={{ color: "#38c6f4", marginTop: "25px" }}
          >
            Events App
          </Link>
          <Link href="/blog" style={{ color: "#38c6f4", marginTop: "25px" }}>
            Blog
          </Link>
        </div>
        <div className="right-navbar-option">
          <Link
            href="/faq/"
            style={{ marginTop: "25px", color: "#fff" }}
            className="faq_class"
          >
            FAQ
          </Link>
          <Link href="/contact/" style={{ marginTop: "25px", color: "#fff" }}>
            Contact
          </Link>

          <Link
            className="business-login-option"
            href="/login"
            onClick={() => {
              navigate.push("/login");
            }}
          >
            Business Login
          </Link>
        </div>
      </div>
    </header>
  );
}

export default Page1;
