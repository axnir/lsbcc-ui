import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { PopoverProps } from './interface';

const prefixCls = 'lsbcc-popover';

const Popover: FC<PopoverProps> = ({ title, content, placement = 'left', children }) => {
  const [visible, setVisible] = useState(false);

  const elem = React.cloneElement(children, {
    className: 'popover-children',
    onMouseOver: () => setVisible(true),
    onMouseOut: () => setVisible(false),
  });

  const classes = classNames('popover-container', `${placement}`, {
    hide: !visible,
  });

  return (
    <div className={prefixCls}>
      <div className={classes}>
        <div className="popover-main">
          <div className="popover-title">{title}</div>
          <div className="popover-content">{content}</div>
        </div>
        <div className={`arrow ${placement}`} />
      </div>
      {elem}
    </div>
  );
};

export default Popover;
