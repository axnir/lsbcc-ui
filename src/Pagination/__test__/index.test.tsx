import React, { useState } from 'react';
import { render } from '@testing-library/react';
import Pagination from '../pagination';

describe('<Pagination />', () => {
  const current = 1;

  test('should render default', () => {
    const { container } = render(
      <Pagination pageSize={10} onChange={console.log} current={current}>
        <button>left</button>
      </Pagination>,
    );
    expect(container).toMatchSnapshot();
  });
});
