import React from 'react';

import theme from '../../../../theme/theme';

const ModalContent = (props) => {
  return (
    <div
      style={{
        width: '100%',
        padding: `${theme.layout.modalPadding.contentY}px ${theme.layout.modalPadding.contentX}px`,
      }}
    >
      {props.children}
    </div>
  );
};

export default ModalContent;
