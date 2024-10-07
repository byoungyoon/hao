import { ReactNode } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Arrow from '@/app/icon/arrow-left.png';
import Image from 'next/image';

type Props = {
  children: ReactNode;
};

export default function WritingLayout({ children }: Props) {
  return (
    <CustomLayout
      text='글 쓰기'
      left={<Image src={Arrow} alt='arrow' width={24} height={24} />}
    >
      {children}
    </CustomLayout>
  );
}
