import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import { ReactNode } from 'react';
import Alarm from '@/app/icon/alarm.png';
import Image from 'next/image';

type Props = {
  children: ReactNode;
};

export default function FeedLayout({ children }: Props) {
  return (
    <CustomLayout
      text='피드'
      right={<Image src={Alarm} alt='alarm' width={24} height={24} />}
    >
      {children}
    </CustomLayout>
  );
}
