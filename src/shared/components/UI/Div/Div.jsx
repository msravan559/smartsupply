import React from 'react';
import PropTypes from 'prop-types';

const Div = (props) => {
  const { alignItems, justifyContent, height, style, className, children } =
    props;

  return (
    <div
      style={{
        display: 'flex',
        alignItems: alignItems,
        justifyContent: justifyContent,
        height: height,
        ...style,
      }}
      className={className}
    >
      {children}
    </div>
  );
};

Div.defaultProps = {
  alignItems: 'center',
  justifyContent: 'center',
  height: '100%',
};

Div.propTypes = {
  children: PropTypes.node.isRequired,
  alignItems: PropTypes.string,
  justifyContent: PropTypes.string,
  height: PropTypes.any,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default Div;
