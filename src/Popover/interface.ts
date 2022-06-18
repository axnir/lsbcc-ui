export interface PopoverProps {
  /**
   * @description      卡片标题
   */
  title: string;
  /**
   * @description      卡片内容
   */
  content: React.ReactNode;
  /**
   * @description      卡片位置
   */
  placement?: 'top' | 'right' | 'bottom' | 'left';
}
