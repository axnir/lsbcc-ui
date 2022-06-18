import React, { useState } from 'react';
import Pagination from '../';
import '../style';

export default () => {
  const [current, setCurrent] = useState(8);

  const onChange = (page: number): void => {
    setCurrent(page);
  };

  return <Pagination total={150} pageSize={10} onChange={onChange} current={current} />;
};
