import { ReactNode } from 'react';
import CustomAlarm from '@/app/(beforeLogin)/_component/CustomAlarm';
import CustomText from '@/app/(beforeLogin)/home/_component/CustomText';
import Layout from '@/app/(beforeLogin)/_component/Layout';
import CustomBack from '@/app/(beforeLogin)/home/_component/CustomBack';
import AnimationProvider from '@/app/provider/AnimationProvider';

type Props = {
  children: ReactNode;
  modal: ReactNode;
};

export default function HomeLayout({ children, modal }: Props) {
  return (
    <>
      <Layout
        text={<CustomText />}
        right={<CustomAlarm isHome />}
        left={<CustomBack />}
      >
        {children}
      </Layout>
      <AnimationProvider>{modal}</AnimationProvider>
    </>
  );
}
