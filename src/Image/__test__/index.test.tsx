import React from 'react';
import { render } from '@testing-library/react';
import Image from '../image';

const src = 'https://s3.bmp.ovh/imgs/2022/05/22/8ea163c9c334972e.jpg';

describe('<Image />', () => {
  test('should render default', () => {
    const { container } = render(<Image src={src} />);
    expect(container).toMatchSnapshot();
  });

  test('should render image fallback', () => {
    const { container } = render(<Image src="undefined" fallback={src} />);
    expect(container).toMatchSnapshot();
  });
});
