import React from 'react';
import { render } from '@testing-library/react';
import Popover from '../popover';

const title = 'Title';
const content = (
  <div>
    <p>Hover me</p>
    <p>Hover me</p>
  </div>
)

describe('<Popover />', () => {
  test('should render default', () => {
    const { container } = render(
      <Popover title={title} content={content}>
        <button>left</button>
      </Popover>
    );
    expect(container).toMatchSnapshot();
  });

  test('should render popover with placement', () => {
    const placements: any[] = ['top', 'right', 'bottom', 'left'];

    const { getByText } = render(
      <>
        {placements.map(t => (
          <Popover key={t} placement={t} title={title} content={content}>
            <button>{t}</button>
          </Popover>
        ))}
      </>,
    );

    placements.forEach(t => {
      expect(getByText(t)).toMatchSnapshot();
    });
  });
});