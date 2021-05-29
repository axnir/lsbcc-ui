import React from 'react';
import Popover from 'lsbcc-ui/lib/popover';
import 'lsbcc-ui/lib/popover/style';

const content = (
  <div>
    <p>Hover me</p>
    <p>Hover me</p>
  </div>
);

const title = 'Title';

export default () => (
  <div className="App">
    <Popover title={title} content={content} placement="right" >
      <button>Hover me</button>
    </Popover>
  </div>
)