'use client';

import Comment from '@/app/icon/comment-image.svg';
import Image from 'next/image';
import Button from '@/app/components/button/Button';
import { ChangeEventHandler, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFeedCommentSave } from '@/app/components/template/feedOne/_state/useFeedCommentSave';

import * as styles from './customCommentInput.css';
import CustomCommentImage from '@/app/components/template/feedOne/_component/CustomCommentImage';

type Props = {
  id: number;
};

export default function CustomCommentInput({ id }: Props) {
  const [value, setValue] = useState('');

  const onChangeInput: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    setValue(event.target.value);
  };

  const onReset = () => {
    setValue('');
  };

  const { onResult, isPending } = useFeedCommentSave({
    id: id,
    onReset: onReset,
  });

  const onClick = () => {
    onResult(value);
  };

  return (
    <>
      <CustomCommentImage />
      <div className={styles.group}>
        <Image src={Comment} alt='plus' className={styles.plusImage} />
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
          color={value === '' ? 'gray' : 'orange'}
          text='전송'
          className={styles.button}
          disabled={isPending || value === ''}
          onClick={onClick}
        />
      </div>
    </>
  );
}
