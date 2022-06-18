import React from 'react';
import Image from '..';
import '../style';

const src = 'https://www.xxx.com/xxx.png';
const fallback = 'https://s3.bmp.ovh/imgs/2022/05/22/8ea163c9c334972e.jpg';

export default () => (
  <div style={{ width: '45vw', height: '25vw', margin: '0 auto' }}>
    <Image src={src} fallback={fallback} width={'100%'} height={'100%'} />
  </div>
);
