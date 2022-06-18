import type { ImgHTMLAttributes, ReactNode } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /**
   * @description      图片地址
   */
  src: string;
  /**
   * @description      可选，加载过程占位元素
   */
  fallback?: string;
  /**
   * @description      可选，加载失败的兜底图片
   */
  loader?: ReactNode;
}
