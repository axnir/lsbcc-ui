import type { MouseEventHandler } from 'react';

export interface ButtonProps {
  /**
   * @description  可选，按钮大小
   */
  size?: 'large' | 'middle' | 'small';
  /**
   * @description  可选，按钮的类型
   */
  type?: 'default' | 'primary';
  /**
   * @description  可选，按钮失效状态
   */
  disabled?: boolean;
  /**
   * @description  可选，组件类名
   */
  className?: string;
  /**
   * @description  可选，点击事件的回调
   */
  onClick?: MouseEventHandler<HTMLElement>;
}
