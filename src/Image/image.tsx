import React, { FC, ReactNode } from 'react';
import useImage from '../_util/hooks/useImage';
import { ImageProps } from './interface';

const prefixCls = 'lsbcc-image';

const Image: FC<ImageProps> = ({ src, loader, fallback, ...imgProps }) => {
  const { src: imgSrc, loading } = useImage({ src, fallback });

  const renderImg = (): ReactNode => {
    if (imgSrc) {
      return <img {...imgProps} src={imgSrc} />;
    }

    if (loading && !loader) {
      const { width, height } = imgProps;
      return (
        <div className={prefixCls} style={{ width, height }}>
          <div className="img-skeletion"></div>
        </div>
      );
    }

    if (loading && loader) {
      return loader;
    }
  };

  return <>{renderImg()}</>;
};

export default Image;
