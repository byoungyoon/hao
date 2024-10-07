import { ReactNode } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Alarm from '@/app/icon/alarm.png';
import Image from 'next/image';

type Props = {
  children: ReactNode;
};

export default function MyLayout({ children }: Props) {
  return (
    <CustomLayout
      right={<Image src={Alarm} alt='alarm' width={24} height={24} />}
      text='마이페이지'
    >
      {children}
    </CustomLayout>
  );
}
