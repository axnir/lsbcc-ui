import React from 'react';
import Image from 'lsbcc-ui/lib/image';
import 'lsbcc-ui/lib/image/style';

const src = 'https://www.xxx.com/xxx.png';
const fallback = 'https://s3.bmp.ovh/imgs/2022/05/22/8ea163c9c334972e.jpg';

export default () => (
  <div className="App">
    <Image src={src} fallback={fallback} width={600} height={300} />
  </div>
);
