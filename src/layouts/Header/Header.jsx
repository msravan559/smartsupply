import React from "react";

import { Col, Layout, Row } from "antd";

import theme from "../../theme/theme";

import Profile from "../Profile/Profile";

import { NavBar, NavBarBrand } from "..";

import styles from "./Header.module.scss";

const AppHeader = () => {
  return (
    <Layout.Header
      className={[styles.appHeader, "p-0"]}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        height: theme.layout.headerHeight,
        lineHeight: `${theme.layout.headerHeight}px`,
        background: theme.colors.primaryColor,
      }}
    >
      <Row>
        <Col flex="none">
          <NavBarBrand />
        </Col>
        <Col flex="auto">
          <NavBar />
        </Col>
        <Col>
          <Profile />
        </Col>
      </Row>
    </Layout.Header>
  );
};



export default AppHeader;
