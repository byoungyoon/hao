'use client';

import Plus from '@/app/icon/plus-gray.png';
import Image from 'next/image';
import Button from '@/app/components/button/Button';
import { ChangeEventHandler, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { useFeedCommentSave } from '@/app/components/template/feedOne/_state/useFeedCommentSave';
import Body from '@/app/components/text/Body';
import VibratingText from '@/app/components/text/VibratingText';

import * as styles from './customCommentInput.css';

const LIMIT_TEXT = 100;

type Props = {
  id: number;
};

export default function CustomCommentInput({ id }: Props) {
  const [value, setValue] = useState('');
  const [updateKey, setUpdateKey] = useState(0);

  const onChangeInput: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    if (event.target.value.length > LIMIT_TEXT) {
      setUpdateKey(updateKey + 1);
      return;
    }

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
    <div className={styles.group}>
      <Image
        src={Plus.src}
        alt='plus'
        width={40}
        height={40}
        className={styles.plusImage}
      />
      <div className={styles.inputLayer}>
        <div className={styles.inputGroup}>
          <TextareaAutosize
            className={styles.textarea}
            rows={1}
            placeholder='경험을 공유하며 힘이 되는 말을 해봐!'
            value={value}
            onChange={onChangeInput}
          />
          <VibratingText updateKey={updateKey}>
            <Body size='7' className={styles.counting}>
              {value.length}/{LIMIT_TEXT}
            </Body>
          </VibratingText>
        </div>
        <Button
          size='auto'
          color={value === '' ? 'gray' : 'orange'}
          text='전송'
          className={styles.button}
          disabled={isPending || value === ''}
          onClick={onClick}
        />
      </div>
    </div>
  );
}
