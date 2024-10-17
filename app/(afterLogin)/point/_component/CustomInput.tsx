'use client';

import { usePointForm } from '@/app/store/useTranslate';
import { ChangeEventHandler } from 'react';

import * as styles from './customInput.css';

export default function CustomInput() {
  const { nickname, updateNickname } = usePointForm();

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    updateNickname(event.target.value.replace(/\s+/g, ''));
  };

  return (
    <input
      type='text'
      value={nickname}
      className={styles.input}
      placeholder='2~5자로 입력해줘'
      onChange={onChangeInput}
    />
  );
}
