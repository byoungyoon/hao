'use client';

import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { ChangeEventHandler, useState } from 'react';
import { usePointForm } from '@/app/store/useTranslate';
import Edit from '@/app/icon/edit-gray.png';
import Image from 'next/image';

import * as styles from './customInput.css';

export default function CustomInput() {
  const { localData: userData } = useUser();
  const { updateNickname } = usePointForm();

  const [nickName, setNickName] = useState(userData.nickname);
  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setNickName(event.target.value);
    updateNickname(event.target.value);
  };

  return (
    <div className={styles.inputLayer}>
      <input
        type='text'
        className={styles.input}
        value={nickName}
        onChange={onChangeInput}
        placeholder='2~5자로 입력해줘'
      />
      <Image
        src={Edit.src}
        alt='edit'
        width={20}
        height={20}
        className={styles.editIcon}
      />
    </div>
  );
}
