'use client';

import Image from 'next/image';
import Camera from '@/app/icon/camera-gray.png';
import { ChangeEvent, useEffect, useMemo, useState } from 'react';
import Close from '@/app/icon/image_close.png';
import { useWritingForm } from '@/app/store/useTranslate';

import * as styles from '@/app/(beforeLogin)/writing/page.css';

export default function CustomImage() {
  const { images, updateImages } = useWritingForm();
  const [image, setImage] = useState<string[]>([]);

  const isApp = useMemo(() => {
    const userAgent =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigator.userAgent || navigator.vendor || (window as any).opera;
    return /your-app-specific-keyword|Android|iPhone|iPad/i.test(userAgent);
  }, []);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;

      setImage((prevState) => {
        const result = prevState.concat(base64Image.split(',')[1]);
        updateImages(result);

        return result;
      });
    };
    reader.readAsDataURL(files[0]);
  };

  const onClick = () => {
    if (image.length >= 3) return;

    if (isApp) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ImageHandler.postMessage('');
    } else {
      const fileInput = document.getElementById('file') as HTMLInputElement;
      fileInput?.click();
    }
  };

  const onCloseImage = (index: number) => () => {
    const result = image.filter((_, i) => index !== i);

    setImage(result);
    updateImages(result);
  };

  useEffect(() => {
    if (images.length !== 0) setImage(images);

    return () => updateImages([]);
  }, []);

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
      <input
        type='file'
        id='file'
        className={styles.file}
        onChange={onFileChange}
        accept='.png,.jpg'
      />
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
