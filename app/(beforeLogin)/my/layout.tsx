import { ReactNode } from 'react';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomText from '@/app/(beforeLogin)/my/_component/CustomText';
import CustomBackButton from '@/app/(beforeLogin)/my/_component/CustomBackButton';
import CustomAlarm from '@/app/(beforeLogin)/_component/CustomAlarm';

type Props = {
  children: ReactNode;
};

export default async function MyLayout({ children }: Props) {
  return (
    <Layout
      text={<CustomText />}
      left={<CustomBackButton />}
      right={<CustomAlarm />}
    >
      {children}
    </Layout>
  );
}
