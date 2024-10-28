'use client';

import Heading from '@/app/components/text/Heading';
import Image from 'next/image';
import Button from '@/app/components/button/Button';
import { useModal } from '@/app/store/useModal';

import * as styles from './textModal.css';
import { useMemo } from 'react';

type Props = {
  text: string[] | string;

  image: {
    background: string;
    item: string;
  };

  result: {
    text: string;
    onResult: () => void;
  };
};

export default function TextModal({ text, image, result }: Props) {
  const { closeModal } = useModal();
  const localText = useMemo(() => {
    return typeof text === 'object' ? text : [text];
  }, [text]);

  const onClose = () => {
    closeModal();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.imageLayer}
        style={{ background: image.background }}
      >
        <Image
          src={image.item}
          alt='modal_image'
          layout='fill'
          objectFit='cover'
          className={styles.image}
        />
      </div>
      <div className={styles.titleLayer}>
        {localText.map((datum) => (
          <Heading key={datum} size='2'>
            {datum}
          </Heading>
        ))}
      </div>
      <div className={styles.buttonGroup}>
        <Button size='long' text='아니야' color='gray' onClick={onClose} />
        <Button
          size='long'
          text={result.text}
          color='orange'
          onClick={result.onResult}
        />
      </div>
    </div>
  );
}
