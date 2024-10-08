'use client';

import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import { ReactNode, useMemo } from 'react';
import Alarm from '@/app/icon/alarm.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Arrow from '@/app/icon/arrow-left.png';

const PATH = '/feed';

type Props = {
  children: ReactNode;
};

export default function FeedLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const defaultPage = useMemo(() => pathname === PATH, [pathname]);

  const onClickBack = () => {
    router.back();
  };

  return (
    <CustomLayout
      text={defaultPage ? '피드' : '글 상세'}
      right={
        defaultPage && <Image src={Alarm} alt='alarm' width={24} height={24} />
      }
      left={
        !defaultPage && (
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
