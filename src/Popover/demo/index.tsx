import React from 'react';
import Popover from '../';
import { Button } from '../../';
import '../style';
import '../../Button/style';

const content = (
  <div>
    <p>Hover me</p>
    <p>Hover me</p>
  </div>
);

const title = 'Title';

export default () => (
  <div className="App">
    <Popover title={title} content={content} placement="right">
      <Button>Hover me</Button>
    </Popover>
  </div>
);
