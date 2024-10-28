import { ReactNode } from 'react';
import CustomBarTab from '@/app/(beforeLogin)/_component/CustomBarTab';
import RQProvider from '@/app/provider/RQProvider';
import Modal from '@/app/components/modal/Modal';

import * as styles from './layout.css';

type Props = {
  children: ReactNode;
};

export default function BeforeLoginLayout({ children }: Props) {
  return (
    <main className={styles.container}>
      <div className={styles.body}>
        <RQProvider>
          {children}
          <Modal />
        </RQProvider>
      </div>
      <footer className={styles.footer}>
        <CustomBarTab />
      </footer>
    </main>
  );
}
