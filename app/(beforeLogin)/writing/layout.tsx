'use client';

import { ReactNode } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Arrow from '@/app/icon/arrow-left.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export default function WritingLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <CustomLayout
      text='글 쓰기'
      left={
        pathname === '/writing/today' && (
          <Image
            src={Arrow}
            alt='arrow'
            width={24}
            height={24}
            onClick={onClickBack}
          />
        )
      }
    >
      {children}
    </CustomLayout>
  );
}
