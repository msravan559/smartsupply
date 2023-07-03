import React from 'react';
import PropTypes from 'prop-types';

const Spacer = (props) => {
  const { className, height, heightUnit, style, width, widthUnit } = props;

  // const spacerWidth = `${width}${widthUnit}`;
  // const spacerHeight = `${height}${heightUnit}`;

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        width: `${width}${widthUnit}`,
        height: `${height}${heightUnit}`,
        ...style,
      }}
    ></div>
  );
};

Spacer.defaultProps = {
  height: 10,
  heightUnit: 'px',
  width: 100,
  widthUnit: '%',
};

Spacer.propTypes = {
  height: PropTypes.number,
  heightUnit: PropTypes.string,
  width: PropTypes.number,
  widthUnit: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Spacer;
