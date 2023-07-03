import React, { useState } from 'react';

import dayjs from 'dayjs';
import Tablejarentry from './Tablejarentry';

const dates = [
  new Date(2023, 1, 28),
  new Date(2023, 2, 1),
  new Date(2023, 2, 5),
  // Add more dates as needed
];

const Dayjarentry = () => {
  const [day, setday] = useState(dayjs().format('DD'));

  return <></>;
};

{
  dates.map((date) => (
    <tr key={date.toISOString()}>
      <td>{date.toLocaleDateString()}</td>
    </tr>
  ));
}

export default Dayjarentry;
