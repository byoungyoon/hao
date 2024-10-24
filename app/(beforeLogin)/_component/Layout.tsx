import { ReactNode } from 'react';
import Navigation from '@/app/components/navigation/Navigation';

import * as styles from './layout.css';

type Props = {
  left?: ReactNode;
  right?: ReactNode;
  text?: string | ReactNode;
  className?: string;
  children: ReactNode;
};

export default function Layout({
  left,
  right,
  text,
  className,
  children,
}: Props) {
  return (
    <div className={styles.wrapper}>
      <Navigation text={text} left={left} right={right} className={className} />
      <div className={styles.mainWrapper}>
        <div className={styles.mainWrapperOverflow}>{children}</div>
      </div>
    </div>
  );
}
