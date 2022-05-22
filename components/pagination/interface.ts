import { MouseEventHandler } from 'react';

export interface PaginationProps {
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