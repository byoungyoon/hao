'use client';

import { ReactNode } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Arrow from '@/app/icon/arrow-left.png';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';

type Props = {
  children: ReactNode;
};

export default function WritingLayout({ children }: Props) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <CustomLayout
      text='글 쓰기'
      left={
        searchParams.has('question') && (
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
