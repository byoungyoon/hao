import { ReactNode } from 'react';
import CustomTitle from '@/app/(beforeLogin)/feed/_component/CustomTitle';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomBackButton from '@/app/(beforeLogin)/feed/_component/CustomBackButton';
import CustomAlarm from '@/app/(beforeLogin)/_component/CustomAlarm';

type Props = {
  children: ReactNode;
};

export default function FeedLayout({ children }: Props) {
  return (
    <Layout
      text={<CustomTitle />}
      left={<CustomBackButton />}
      right={<CustomAlarm />}
    >
      {children}
    </Layout>
  );
}
