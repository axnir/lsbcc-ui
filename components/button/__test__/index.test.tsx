import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';

describe('<Popover />', () => {
  test('should render default', () => {
    const { container } = render(<Button>button</Button>);
    expect(container).toMatchSnapshot();
  });

  // test('should render button', () => {
  //   const placements: any[] = ['top', 'right', 'bottom', 'left'];

  //   const { getByText } = render(
  //     <>
  //       {placements.map((t) => (
  //         <Popover key={t} placement={t} title={title} content={content}>
  //           <button>{t}</button>
  //         </Popover>
  //       ))}
  //     </>,
  //   );

  //   placements.forEach((t) => {
  //     expect(getByText(t)).toMatchSnapshot();
  //   });
  });
});
