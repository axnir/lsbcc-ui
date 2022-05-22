import React from 'react';
import { render } from '@testing-library/react';
import Image from '../image';

const src = 'https://s3.bmp.ovh/imgs/2022/05/22/8ea163c9c334972e.jpg';

describe('<Image />', () => {
  test('should render default', () => {
    const { container } = render(<Image src={src} />);
    expect(container).toMatchSnapshot();
  });

  // test('should render image', () => {
  //   const placements: any[] = ['top', 'right', 'bottom', 'left'];

  //   const { getByText } = render(
  //     <>
  //       {placements.map(t => (
  //         <Popover key={t} placement={t} title={title} content={content}>
  //           <button>{t}</button>
  //         </Popover>
  //       ))}
  //     </>,
  //   );

  // placements.forEach(t => {
  //   expect(getByText(t)).toMatchSnapshot();
  // });
  // });
});
