import { ButtonHTMLAttributes, MouseEventHandler } from 'react';

export type Size = 'large' | 'middle' | 'small';
export type Type = 'default' | 'primary';

export interface ButtonProps {
  size?: Size;
  type?: Type;
  disabled?: boolean;
  className?: string;
  onClick?: MouseEventHandler<HTMLElement>;
}
