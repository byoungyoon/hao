'use client';

import Body from '@/app/components/text/Body';
import { useWritingForm } from '@/app/store/useTranslate';
import { ChangeEventHandler } from 'react';

import * as styles from './customTextarea.css';

export default function CustomTextarea() {
  const { body, updateBody } = useWritingForm();

  const onChangeTextarea: ChangeEventHandler<HTMLTextAreaElement> = (event) => {
    const value = event.target.value;
    if (value.length > 100) return;

    updateBody(value);
  };

  return (
    <div className={styles.textareaLayer}>
      <textarea
        value={body}
        className={styles.textarea}
        placeholder='무슨 후회야? 궁금하다!'
        onChange={onChangeTextarea}
      />
      <Body size='3' className={styles.counting}>
        {body.length}/100
      </Body>
    </div>
  );
}
