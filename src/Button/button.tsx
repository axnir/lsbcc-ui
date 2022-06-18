import React from 'react';
import classNames from 'classnames';
import type { FC } from 'react';
import type { ButtonProps } from './interface';

const prefixCls = 'lsbcc-button';

const Button: FC<ButtonProps> = ({
  type = 'default',
  size = 'middle',
  disabled,
  children,
  className,
  onClick,
  ...buttonProps
}) => {
  const classes = classNames(prefixCls, className, {
    primary: type === 'primary',
    large: size === 'large',
    small: size === 'small',
    disabled,
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && (onClick as React.MouseEventHandler<HTMLButtonElement>)(e);
  };

  return (
    <button {...buttonProps} type="button" className={classes} onClick={handleClick}>
      <span className="btn-name">{children}</span>
    </button>
  );
};

export default Button;
