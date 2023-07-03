import React from 'react';

import theme from '../../theme/theme';
// import { assets } from '../../constants';
import constants from '../../constants';
import styles from './NavBarBrand.module.scss';
import { customerLogo } from '../../constants/assets';

const NavBarBrand = () => {
  return (
    <div
      className={styles.brand}
      style={{
        height: theme.layout.headerHeight,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <div className={styles.brandLogo}>
        <img alt="logo" src={customerLogo} />
      </div>
    </div>
  );
};

export default NavBarBrand;
