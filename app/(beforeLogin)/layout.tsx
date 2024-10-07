import { ReactNode } from 'react';
import CustomBarTab from '@/app/(beforeLogin)/_component/CustomBarTab';

import * as styles from './layout.css';
import RQProvider from '@/app/(beforeLogin)/RQProvider';

type Props = {
  children: ReactNode;
};

export default function BeforeLoginLayout({ children }: Props) {
  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <RQProvider>{children}</RQProvider>
      </div>
      <footer className={styles.footer}>
        <CustomBarTab />
      </footer>
    </main>
  );
}
