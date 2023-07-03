import React, { useState } from 'react';

import dayjs from 'dayjs';
import { Radio } from 'antd';

const MonthSelector = (props) => {
  const { month, setMonth } = props;
  // const [month, setMonth] = useState(dayjs().format('MMMM'));

  return (
    <Radio.Group value={month} onChange={(e) => setMonth(e.target.value)}>
      {[...Array(3)]
        .map((item, index) => {
          const month = dayjs().subtract(index, 'month');

          return (
            <Radio.Button key={index} value={month.format('M')}>
              {month.format('MMMM')}
            </Radio.Button>
          );
        })
        .reverse()}
    </Radio.Group>
  );
};

export default MonthSelector;
