'use client';

import { useParams } from 'next/navigation';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';
import LogoIcon from '@/app/components/svg/LogoIcon';
import { vars } from '@/app/theme.css';

import * as styles from './customBack.css';

export default function CustomBack() {
  const params = useParams<{ detail: string }>();

  return params.detail ? (
    <BackButton />
  ) : (
    <LogoIcon
      borderColor={vars.color.orange['300']}
      className={styles.logo}
      style={{ position: 'relative', zIndex: 1, marginTop: 10 }}
    />
  );
}
