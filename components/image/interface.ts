import { ImgHTMLAttributes, ReactNode } from 'react';

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  fallback?: string;
  loader?: ReactNode;
}
