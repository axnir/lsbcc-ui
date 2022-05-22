import React from 'react';
import { render } from '@testing-library/react';
import Alert from '../alert';

describe('<Alert />', () => {
  test('should render default', () => {
    const { container } = render(<Alert>default</Alert>);
    expect(container).toMatchSnapshot();
  });

  test('should render alert with type', () => {
    const types: any[] = ['info', 'warning', 'positive', 'negative'];

    const { getByText } = render(
      <>
        {types.map((t) => (
          <Alert type={t} key={t}>
            {t}
          </Alert>
        ))}
      </>,
    );

    types.forEach((t) => {
      expect(getByText(t)).toMatchSnapshot();
    });
  });
});
