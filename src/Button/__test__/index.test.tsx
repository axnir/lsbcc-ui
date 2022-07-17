import React from 'react';
import { render } from '@testing-library/react';
import Button from '../button';
import { ButtonProps } from '../interface';

describe('<Popover />', () => {
  test('should render default', () => {
    const { container } = render(<Button>button</Button>);
    expect(container).toMatchSnapshot();
  });

  test('should render button with type', () => {
    const types: ButtonProps['type'][] = ['default', 'primary'];

    const { getByText } = render(
      <>
        {types.map((t) => (
          <Button key={t} type={t}>
            {t}
          </Button>
        ))}
      </>,
    );

    types.forEach((t) => {
      t && expect(getByText(t)).toMatchSnapshot();
    });
  });

  test('should render button with size', () => {
    const types: ButtonProps['size'][] = ['large', 'middle', 'small'];

    const { getByText } = render(
      <>
        {types.map((t) => (
          <Button key={t} size={t}>
            {t}
          </Button>
        ))}
      </>,
    );

    types.forEach((t) => {
      t && expect(getByText(t)).toMatchSnapshot();
    });
  });

  test('should render button with disabled', () => {
    const { container } = render(
      <>
        <Button disabled>disabled</Button>
      </>,
    );

    expect(container).toMatchSnapshot();
  });
});
