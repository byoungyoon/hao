import { ReactNode } from 'react';
import Header from '@/app/icon/home/header.png';
import Image from 'next/image';
import Link from 'next/link';

import * as styles from './customTopLayer.css';

type Props = {
  children: ReactNode;
};

export default function CustomTopLayer({ children }: Props) {
  return (
    <article className={styles.topLayer}>
      {children}
      <Link href={'/writing?question=1'}>
        <Image src={Header} alt='header' className={styles.image} />
      </Link>
    </article>
  );
}
