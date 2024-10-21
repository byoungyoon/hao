'use client';

import Image from 'next/image';
import Camera from '@/app/icon/camera-gray.png';

import * as styles from '@/app/(beforeLogin)/writing/page.css';

export default function CustomImage() {
  const onClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ImageHandler.postMessage('');
  };

  return (
    <div className={styles.imageLayer} onClick={onClick}>
      <Image src={Camera.src} alt='camera' width={24} height={24} />
    </div>
  );
}
