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
  console.log(id);

  const [value, setValue] = useState('');

  const onChangeInput: ChangeEventHandler<HTMLInputElement> = (event) => {
    setValue(event.target.value);
  };

  // const onBeforeUnload = useCallback((event: BeforeUnloadEvent) => {
  //   event.preventDefault();
  //   (event || window.event).returnValue = '';
  //
  //   return '';
  // }, []);
  //
  // const onPopState = useCallback(() => {
  //   history.pushState(null, '', location.href);
  // }, []);
  //
  // useEffect(() => {
  //   if (value !== '') {
  //     window.addEventListener('beforeunload', onBeforeUnload);
  //     window.addEventListener('popstate', onPopState);
  //   }
  //
  //   return () => {
  //     window.removeEventListener('beforeunload', onBeforeUnload);
  //     window.removeEventListener('popstate', onPopState);
  //   };
  // }, [onBeforeUnload, onPopState, value]);
  //
  // useEffect(() => {
  //   history.pushState(null, '', location.href);
  // }, []);

  return (
    <div className={styles.group}>
      <Image src={Plus} alt='plus' width={40} height={40} />
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
