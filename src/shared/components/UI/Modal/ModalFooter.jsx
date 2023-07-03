import React from 'react';

import theme from '../../../../theme/theme';

const ModalFooter = (props) => {
  return (
    <div
      style={{
        padding: theme.layout.modalPadding.footer,
        borderTop: `1px solid ${theme.colors.border}`,
      }}
    >
      {props.children}
    </div>
  );
};

export default ModalFooter;
