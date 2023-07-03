import React from 'react';

import { Layout } from 'antd';

import theme from '../../theme/theme';
import { useMobileMediaQuery } from '../../shared/utils';

import styles from './AppContent.module.scss';

const Content = (props) => {
  const top = theme.layout.headerHeight + theme.layout.contentOuterPaddingY;
  const right = theme.layout.contentOuterPaddingX;
  const bottom = theme.layout.footerHeight + theme.layout.contentOuterPaddingY;

  return (
    <div
      className={styles.appContentWrapper}
      style={{
        top,
        right,
        bottom,
        left: right,
      }}
    >
      <Layout.Content>{props.children}</Layout.Content>
    </div>
  );
};

export default Content;
