import React from 'react';
import Popover from 'lsbcc-ui/lib/popover';
import Button from 'lsbcc-ui/lib/button';
import 'lsbcc-ui/lib/popover/style';
import 'lsbcc-ui/lib/button/style';

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
