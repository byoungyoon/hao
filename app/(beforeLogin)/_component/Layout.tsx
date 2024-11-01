import { ReactNode } from 'react';
import Navigation from '@/app/components/navigation/Navigation';
import ScrollProvider from '@/app/provider/ScrollProvider';

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
      <ScrollProvider>{children}</ScrollProvider>
    </div>
  );
}
