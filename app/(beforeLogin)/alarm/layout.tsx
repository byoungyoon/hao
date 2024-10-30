import { ReactNode } from 'react';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';

type Props = {
  children: ReactNode;
};

export default function AlarmLayout({ children }: Props) {
  return (
    <Layout text='알림' left={<BackButton />}>
      {children}
    </Layout>
  );
}
