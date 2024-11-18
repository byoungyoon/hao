import { ReactNode } from 'react';
import Link from 'next/link';
import HeaderIcon from '@/app/components/svg/HeaderIcon';
import { vars } from '@/app/theme.css';

import * as styles from './customTopLayer.css';

type Props = {
  children: ReactNode;
};

export default function CustomTopLayer({ children }: Props) {
  return (
    <article className={styles.topLayer}>
      {children}
      <Link href={'/writing/i/today'}>
        <HeaderIcon
          className={styles.image}
          color={vars.color.orange['300']}
          borderColor={vars.color.orange['100']}
        />
      </Link>
    </article>
  );
}
