import React, { useState } from 'react';
import Pagination from 'lsbcc-ui/lib/pagination';
import 'lsbcc-ui/lib/pagination/style';

export default () => {
  const [current, setCurrent] = useState(8);

  const onChange = (page: number): void => {
    setCurrent(page);
  };

  return <Pagination total={150} pageSize={10} onChange={onChange} current={current} />;
};
