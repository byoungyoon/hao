'use client';

import Button from '@/app/components/button/Button';
import * as styles from './customLogout.css';

export default function CustomLogout() {
  const onLogout = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).LogoutHandler.postMessage('');
  };

  return (
    <Button
      size='auto'
      text='로그아웃'
      color='gray'
      className={styles.logout}
      onClick={onLogout}
    />
  );
}
