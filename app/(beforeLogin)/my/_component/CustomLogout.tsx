'use client';

import Button from '@/app/components/button/Button';
import { useModal } from '@/app/store/useModal';
import TextModal from '@/app/components/modal/TextModal';
import Image from '@/app/image/character/modal-logout.svg';
import { vars } from '@/app/theme.css';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';

import * as styles from './customLogout.css';

export default function CustomLogout() {
  const router = useRouter();
  const openModal = useModal((state) => state.openModal);

  const onResult = () => {
    const userAgent =
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      navigator.userAgent || navigator.vendor || (window as any).opera;

    const isWebView = userAgent.includes('wv') || userAgent.includes('WebView');

    if (isWebView) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).LogoutHandler.postMessage('');
    } else {
      Cookies.remove('token');
      router.replace('/web');
    }
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
