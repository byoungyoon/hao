import { ReactNode } from 'react';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';
import AnimationProvider from '@/app/provider/AnimationProvider';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function AlarmLayout({ children, modal }: Props) {
  return (
    <>
      <Layout text='알림' left={<BackButton />}>
        {children}
      </Layout>
      <AnimationProvider>{modal}</AnimationProvider>
    </>
  );
}
