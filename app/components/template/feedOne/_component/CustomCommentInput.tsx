'use client';

import Plus from '@/app/icon/plus-gray.png';
import Image from 'next/image';
import Button from '@/app/components/button/Button';
import { ChangeEventHandler, useState } from 'react';

import * as styles from './customCommentInput.css';

type Props = {
  id: number;
};

export default function CustomCommentInput({ id }: Props) {
  const [value, setValue] = useState('');

  console.log(id);

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className={styles.group}>
      <Image src={Plus.src} alt='plus' width={40} height={40} />
      <div className={styles.inputLayer}>
        <input
          className={styles.input}
          placeholder='경험을 공유하며 힘이 되는 말을 해봐!'
          value={value}
          onChange={onChangeInput}
        />
        <Button
          size='auto'
          color='gray'
          text='전송'
          className={styles.button}
        />
      </div>
    </div>
  );
}
