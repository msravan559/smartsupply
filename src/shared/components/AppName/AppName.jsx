import React from 'react';
import PropTypes from 'prop-types';

import { useAppSelector } from '../../../hooks';
import { selectAboutInfo } from '../../../features/config/configSlice';
import { Typography } from 'antd';

const AppName = (props) => {
  const { className, level, style } = props;

  const { data } = useAppSelector(selectAboutInfo);

  return (
    <Typography.Title level={level} className={className} style={{ ...style }}>
      {data && data.ProductLongName}
    </Typography.Title>
  );
};

AppName.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  level: PropTypes.number,
};

export default AppName;
