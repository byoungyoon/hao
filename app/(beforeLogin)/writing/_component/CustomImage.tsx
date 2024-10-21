'use client';

import Image from 'next/image';
import Camera from '@/app/icon/camera-gray.png';
import { useEffect, useState } from 'react';

import * as styles from '@/app/(beforeLogin)/writing/page.css';

export default function CustomImage() {
  const [image, setImage] = useState('');

  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ImageHandler.postMessage('');
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).handleImage = function (base64Image: string) {
      setImage(base64Image);
    };
  }, []);

  return (
    <>
      <div className={styles.imageLayer} onClick={onClick}>
        <Image src={Camera.src} alt='camera' width={24} height={24} />
      </div>
      <div className={styles.imageLayer}>
        <Image
          src={`data:image/png;base64,${image}`}
          alt='test'
          width={50}
          height={50}
          unoptimized
        />
      </div>
      <p>{image}</p>
    </>
  );
}
