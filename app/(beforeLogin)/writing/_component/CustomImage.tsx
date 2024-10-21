'use client';

import Image from 'next/image';
import Camera from '@/app/icon/camera-gray.png';
import { useEffect, useState } from 'react';
import Close from '@/app/icon/image_close.png';
import { useWritingForm } from '@/app/store/useTranslate';

import * as styles from '@/app/(beforeLogin)/writing/page.css';

export default function CustomImage() {
  const { updateImages } = useWritingForm();
  const [image, setImage] = useState<string[]>([]);

  const onClick = () => {
    if (image.length >= 3) return;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).ImageHandler.postMessage('');
  };

  const onCloseImage = (index: number) => () => {
    const result = image.filter((_, i) => index !== i);

    setImage(result);
    updateImages(result);
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).handleImage = function (base64Image: string) {
      setImage((prevState) => {
        const result = prevState.concat(base64Image);

        updateImages(result);
        return result;
      });
    };
  }, []);

  return (
    <>
      <div className={styles.imageLayer} onClick={onClick}>
        <Image src={Camera.src} alt='camera' width={24} height={24} />
      </div>
      {image.map((datum, index) => (
        <div key={index} className={styles.imageLayer}>
          <Image
            src={`data:image/png;base64,${datum}`}
            alt='my'
            layout='fill'
            objectFit='cover'
            objectPosition='center'
            unoptimized
          />
          <Image
            src={Close.src}
            alt='close'
            width={18}
            height={18}
            className={styles.close}
            onClick={onCloseImage(index)}
          />
        </div>
      ))}
    </>
  );
}
