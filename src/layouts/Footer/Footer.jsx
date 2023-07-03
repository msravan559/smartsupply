import React from "react";

import { Layout } from "antd";

import theme from "../../theme/theme";
import { useMobileMediaQuery } from "../../shared/utils";

import styles from "./Footer.module.scss";

const Footer = () => {
  let marginLeft = theme.layout.sideBarWidth;
  let width = `calc(100% - ${theme.layout.sideBarWidth}px)`;

  if (useMobileMediaQuery()) {
    marginLeft = 0;
    width = "100%";
  }

  return (
    <Layout.Footer
      className={[styles.appFooter, "p-0"]}
      style={{
        width: "100%",
        height: theme.layout.footerHeight,
        lineHeight: `${theme.layout.footerHeight}px`,
        borderTop: `1px solid ${theme.colors.border}`,
        background: theme.colors.white,
        color: "#16d6e4",
      }}
    >
      <p>
        Powered by{" "}
        <a href="https://treosoftit.com/" target="_blank">
          Treosoft IT Solutions pvt Limited
        </a>
      </p>
    </Layout.Footer>
  );
};

export default Footer;
