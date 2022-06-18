import { MouseEventHandler } from 'react';

export interface PaginationProps {
  /**
   * @description      数据总数
   */
  pageSize: number;
  /**
   * @description      每页条数
   */
  total?: number;
  /**
   * @description      当前页数
   */
  current: number;
  /**
   * @description      页码改变的回调，参数是改变后的页码
   */
  onChange(page: number): void;
}

export type OmitPageProps = {
  onClick: MouseEventHandler<HTMLElement>;
};
