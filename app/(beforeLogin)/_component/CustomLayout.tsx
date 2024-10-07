import { ReactNode } from 'react';
import Navigation from '@/app/components/navigation/Navigation';

import * as styles from './customLayout.css';

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  text?: string;

  children: ReactNode;
};

export default function CustomLayout({ left, right, text, children }: Props) {
  return (
    <div className={styles.wrapper}>
      <header>
        <Navigation text={text} left={left} right={right} />
      </header>
      <div className={styles.mainWrapper}>
        <div className={styles.mainWrapperOverflow}>{children}</div>
      </div>
    </div>
  );
}
