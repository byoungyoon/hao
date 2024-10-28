'use client';

import Button from '@/app/components/button/Button';
import { useModal } from '@/app/store/useModal';
import TextModal from '@/app/components/modal/TextModal';
import Image from '@/app/image/character/modal-logout.png';
import { vars } from '@/app/theme.css';

import * as styles from './customLogout.css';

export default function CustomLogout() {
  const openModal = useModal((state) => state.openModal);

  const onResult = () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).LogoutHandler.postMessage('');
  };

  const onLogout = () => {
    openModal(
      <TextModal
        text='로그아웃 하려고..?'
        image={{
          item: Image.src,
          background: vars.color.red['100'],
        }}
        result={{
          text: '응 안녕!',
          onResult: onResult,
        }}
      />,
    );
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
