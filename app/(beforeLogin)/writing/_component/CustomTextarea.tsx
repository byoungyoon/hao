'use client';

import Body from '@/app/components/text/Body';
import { useWritingForm } from '@/app/store/useTranslate';
import { ChangeEventHandler, useEffect, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import VibratingText from '@/app/components/text/VibratingText';

import * as styles from './customTextarea.css';

const LIMIT_TEXT = 500;

type Props = {
  isQuestion?: boolean;
};

export default function CustomTextarea({ isQuestion }: Props) {
  const { body, updateBody } = useWritingForm();
  const [updateKey, setUpdateKey] = useState(0);

  const onChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const value = event.target.value;

    if (body.replace(/\n/g, '').length > LIMIT_TEXT) {
      setUpdateKey(updateKey + 1);
      return;
    }

    updateBody(value);
  };

  useEffect(() => {
    return () => updateBody('');
  }, [updateBody]);

  return (
    <div className={styles.textareaLayer}>
      <TextareaAutosize
        value={body}
        className={styles.textarea}
        placeholder={
          isQuestion ? 're.더 자세히 들려줘!' : '무슨 후회야? 궁금하다!'
        }
        onChange={onChangeTextarea}
      />
      <VibratingText updateKey={updateKey}>
        <Body size='3' className={styles.counting}>
          {body.replace(/\n/g, '').length}/{LIMIT_TEXT}
        </Body>
      </VibratingText>
    </div>
  );
}
