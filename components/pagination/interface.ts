import { MouseEventHandler } from 'react';

export type PaginationProps  = {
  /**
   * Set this to change page
   */
  pageSize: number;
  total?: number;
  current: number;
  onChange(page: number): void;
}

export type OmitPageProps  = {
  onClick: MouseEventHandler<HTMLElement>;
}