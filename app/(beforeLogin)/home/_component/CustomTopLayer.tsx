'use client';

import { ReactNode } from 'react';
import Link from 'next/link';
import Snowman from '@/app/image/sample/snowman.png';
import Background from '@/app/image/sample/snowBackground.png';
import Image from 'next/image';
import { useTheme } from '@/app/store/useTranslate';
import HeaderIcon from '@/app/components/svg/HeaderIcon';
import { vars } from '@/app/theme.css';

import * as styles from './customTopLayer.css';

type Props = {
  children: ReactNode;
};

export default function CustomTopLayer({ children }: Props) {
  const { theme } = useTheme();

  return (
    <article className={styles.topLayer}>
      {children}
      {theme === 'default' ? (
        <Link href={'/writing/i/today'}>
          <HeaderIcon
            className={styles.image}
            color={vars.color.orange['300']}
            borderColor={vars.color.orange['100']}
          />
        </Link>
      ) : (
        <>
          <Image
            src={Snowman}
            alt='snowman'
            width={130}
            className={styles.snowman1}
          />
          <Image src={Background} alt='background' width={270} />
        </>
      )}
    </article>
  );
}
