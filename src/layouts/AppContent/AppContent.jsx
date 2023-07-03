import React, { useEffect } from "react";

import { Card } from "antd";

import theme from "../../theme/theme";

import { useAppDispatch, useAppSelector } from "../../hooks";
import {
  selectContentHeight,
  selectSummaryCardHeight,
  setContentHeight,
  setSummaryCardHeight,
} from "../../features/config/configSlice";

import { ScrollBar } from "../../shared/components";

import styles from "./AppContent.module.scss";

const AppContent = (props) => {
  const { children, contentTop } = props;

  const contentHeight = useAppSelector(selectContentHeight);
  const summaryCardHeight = useAppSelector(selectSummaryCardHeight);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!contentTop) {
      dispatch(setSummaryCardHeight(0));
    }

    dispatch(
      setContentHeight(theme.layout.contentHeight() - summaryCardHeight)
    );
  }, [contentTop, dispatch, summaryCardHeight]);

  const Content = () => (
    <div
      style={{
        height: contentHeight,
        overflow: "hidden",
      }}
    >
      <Card
        className={styles.appContent}
        bodyStyle={{
          padding: 0,
          height: "100%",
        }}
      >
        <ScrollBar height={contentHeight}>
          <div style={{ padding: theme.layout.padding }}>{children}</div>
        </ScrollBar>
      </Card>
    </div>
  );

  if (contentTop) {
    return (
      <>
        {contentTop}
        <Content />
      </>
    );
  }

  return <Content />;
};

export default AppContent;
