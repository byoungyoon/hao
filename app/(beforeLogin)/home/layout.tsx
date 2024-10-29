import { ReactNode } from 'react';
import CustomAlarm from '@/app/(beforeLogin)/home/_component/CustomAlarm';
import CustomText from '@/app/(beforeLogin)/home/_component/CustomText';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomBack from '@/app/(beforeLogin)/home/_component/CustomBack';

type Props = {
  children: ReactNode;
};

export default function HomeLayout({ children }: Props) {
  return (
    <Layout text={<CustomText />} right={<CustomAlarm />} left={<CustomBack />}>
      {children}
    </Layout>
  );
}
