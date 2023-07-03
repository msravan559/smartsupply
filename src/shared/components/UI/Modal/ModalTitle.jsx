import React from 'react';

import theme from '../../../../theme/theme';

const ModalTitle = (props) => {
  const { label, value } = props;

  return (
    <div
      style={{
        padding: theme.layout.modalPadding.header,
        borderBottom: `1px solid ${theme.colors.border}`,
      }}
    >
      <span className="fw-600">{label}</span>
      <span className="c-brand">{value}</span>
    </div>
  );
};

export default ModalTitle;
