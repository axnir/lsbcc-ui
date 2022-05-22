import React from 'react';

import { AlertProps, TypeMap } from './interface';

const prefixCls = 'lsbcc-alert';

const types: TypeMap = {
  info: '#5352ED',
  positive: '#2ED573',
  negative: '#FF4757',
  warning: '#FFA502',
};

const Alert: React.FC<AlertProps> = ({ children, type = 'info', ...rest }) => (
  <div
    className={prefixCls}
    style={{
      background: types[type],
    }}
    {...rest}
  >
    {children}
  </div>
);

export default Alert;
