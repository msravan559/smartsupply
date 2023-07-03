import React from 'react';
import PropTypes from 'prop-types';

import { Card, Spin } from 'antd';

import styles from './Loader.module.scss';

const Loader = (props) => {
  const { className, height, heightUnit, style, width, widthUnit } = props;

  return (
    <Card>
      <div
        className={[styles.loader, className].join(' ')}
        style={{
          width: `${width}${widthUnit}`,
          height: `${height}${heightUnit}`,
          ...style,
        }}
      >
        <Spin />
      </div>
    </Card>
  );
};

Loader.defaultProps = {
  height: 10,
  heightUnit: 'vh',
  width: 100,
  widthUnit: '%',
};

Loader.propTypes = {
  className: PropTypes.string,
  height: PropTypes.number,
  heightUnit: PropTypes.string,
  style: PropTypes.object,
  width: PropTypes.number,
  widthUnit: PropTypes.string,
};

export default Loader;
