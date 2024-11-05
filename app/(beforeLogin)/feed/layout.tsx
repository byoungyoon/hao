import { ReactNode } from 'react';
import CustomTitle from '@/app/(beforeLogin)/feed/_component/CustomTitle';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomBackButton from '@/app/(beforeLogin)/feed/_component/CustomBackButton';
import CustomAlarm from '@/app/(beforeLogin)/_component/CustomAlarm';
import AnimationProvider from '@/app/provider/AnimationProvider';

import * as styles from './layout.css';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function FeedLayout({ children, modal }: Props) {
  return (
    <>
      <Layout
        text={<CustomTitle />}
        left={<CustomBackButton />}
        right={<CustomAlarm />}
      >
        <div className={styles.layer}>{children}</div>
      </Layout>
      <AnimationProvider>{modal}</AnimationProvider>
    </>
  );
}
