'use client';

import { useParams } from 'next/navigation';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';
import Image from 'next/image';
import Logo from '@/app/icon/logo.svg';

import * as styles from './customBack.css';

export default function CustomBack() {
  const params = useParams<{ detail: string }>();

  return params.detail ? (
    <BackButton />
  ) : (
    <Image
      src={Logo}
      alt='logo'
      width={82}
      height={25}
      className={styles.logo}
      style={{ position: 'relative', zIndex: 1, marginTop: 10 }}
    />
  );
}
