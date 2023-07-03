import React from 'react';
import PropTypes from 'prop-types';

import { Empty } from 'antd';

const EmptyCustom = ({ description, image }) => (
  <Empty image={image} description={description} />
);

EmptyCustom.defaultProps = {
  image: Empty.PRESENTED_IMAGE_SIMPLE,
  description: 'No data found!',
};

EmptyCustom.propTypes = {
  image: PropTypes.any,
  description: PropTypes.string,
};

export default EmptyCustom;
