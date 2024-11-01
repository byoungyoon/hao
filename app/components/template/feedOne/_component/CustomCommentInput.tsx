'use client';

import Comment from '@/app/icon/comment-image.svg';
import Image from 'next/image';
import Remove from '@/app/icon/image-remove.svg';
import Button from '@/app/components/button/Button';
import { ChangeEvent, ChangeEventHandler, useEffect, useMemo } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFeedCommentSave } from '@/app/components/template/feedOne/_state/useFeedCommentSave';
import { makeFile } from '@/app/util/makeFile';

import * as styles from './customCommentInput.css';
import { useCommentForm } from '@/app/store/useTranslate';

type Props = {
  id: number;
};

export default function CustomCommentInput({ id }: Props) {
  const { value, image, target, updateValue, updateImage } = useCommentForm();

  const isResult = useMemo(() => {
    return !(value === '' && image === '');
  }, [value, image]);

  const onFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      updateImage(base64Image.split(',')[1]);
    };
    reader.readAsDataURL(files[0]);
  };

  const onClickImage = () => {
    const userAgent =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigator.userAgent || navigator.vendor || (window as any).opera;

    const isWebView = userAgent.includes('wv') || userAgent.includes('WebView');

    if (isWebView) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).ImageHandler.postMessage('');
    } else {
      const fileInput = document.getElementById('file') as HTMLInputElement;
      fileInput?.click();
    }
  };

  const onChangeInput: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    updateValue(event.target.value);
  };

  const onReset = () => {
    updateValue('');
    onRemove();
  };

  const { onResult, isPending } = useFeedCommentSave({
    id: id,
    targetId: target,
    onReset: onReset,
  });

  const onClick = () => {
    onResult(value, makeFile(image, 'file1.png'));
  };

  const onRemove = () => {
    updateImage('');

    const fileInput = document.getElementById('file') as HTMLInputElement;
    fileInput.value = '';
  };

  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).handleImage = function (base64Image: string) {
      updateImage(base64Image);
    };
  }, []);

  return (
    <>
      {image && (
        <div className={styles.layer}>
          <div className={styles.imageLayer}>
            <Image
              src={`data:image/png;base64,${image}`}
              alt='image'
              layout='fill'
              objectFit='cover'
              className={styles.image}
              unoptimized
            />
            <Image
              src={Remove}
              alt='remove'
              className={styles.remove}
              onClick={onRemove}
            />
          </div>
        </div>
      )}
      <input
        type='file'
        id='file'
        className={styles.file}
        onChange={onFileChange}
        accept='.png,.jpg'
      />
      <div className={styles.group}>
        <Image
          src={Comment}
          alt='plus'
          className={styles.plusImage}
          onClick={onClickImage}
        />
        <TextareaAutosize
          className={styles.textarea}
          rows={1}
          maxRows={3}
          placeholder='경험을 공유하며 힘이 되는 말을 해봐!'
          value={value}
          onChange={onChangeInput}
        />
        <Button
          size='auto'
          color={isResult ? 'orange' : 'gray'}
          text='전송'
          className={styles.button}
          disabled={isPending || !isResult}
          onClick={onClick}
        />
      </div>
    </>
  );
}
