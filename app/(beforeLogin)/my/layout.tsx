import { ReactNode } from 'react';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomText from '@/app/(beforeLogin)/my/_component/CustomText';
import CustomBackButton from '@/app/(beforeLogin)/my/_component/CustomBackButton';
import CustomAlarm from '@/app/(beforeLogin)/_component/CustomAlarm';
import { AnimatePresence } from 'framer-motion';
import AnimationProvider from '@/app/provider/AnimationProvider';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default async function MyLayout({ children, modal }: Props) {
  return (
    <>
      <Layout
        text={<CustomText />}
        left={<CustomBackButton />}
        right={<CustomAlarm />}
      >
        {children}
      </Layout>
      <AnimatePresence>
        <AnimationProvider>{modal}</AnimationProvider>
      </AnimatePresence>
    </>
  );
}
