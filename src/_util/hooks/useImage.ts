import { useLayoutEffect, useState, useEffect } from 'react';
import imgPromise from '../imgPromise';
import isServer from '../isServer';

// 支持 SSR ，服务端使用 useEffect，客户端使用 useLayoutEffect
const useIsomorphicEffect = isServer() ? useEffect : useLayoutEffect;

export default function useImage({ src, fallback }: { src: string; fallback?: string }) {
  const [loading, setLoading] = useState(true);
  const [imgSrc, setImgSrc] = useState<string | undefined>();

  useIsomorphicEffect(() => {
    imgPromise(src)
      .then(() => {
        setImgSrc(src);
        setLoading(false);
      })
      .catch(() => {
        fallback && setImgSrc(fallback);
        setLoading(false);
      });
  }, []);

  return { loading, src: imgSrc };
}
