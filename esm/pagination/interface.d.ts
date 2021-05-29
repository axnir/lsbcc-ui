import { MouseEventHandler } from 'react';
export declare type PaginationProps = {
    /**
     * Set this to change page
     */
    pageSize: number;
    total: number;
    current: number;
    onChange(page: number): void;
};
export declare type OmitPageProps = {
    onClick: MouseEventHandler<HTMLElement>;
};
