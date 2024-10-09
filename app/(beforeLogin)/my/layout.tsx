'use client';

import { ReactNode, useMemo } from 'react';
import CustomLayout from '@/app/(beforeLogin)/_component/CustomLayout';
import Alarm from '@/app/icon/alarm.png';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import Arrow from '@/app/icon/arrow-left.png';

const PATH = '/my';

type Props = {
  children: ReactNode;
};

export default function MyLayout({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  const defaultPage = useMemo(() => pathname === PATH, [pathname]);
  const text = useMemo(() => {
    if (pathname.endsWith('scrap')) return '스크랩';
    if (pathname.endsWith('modify')) return '내 정보 수정';

    return '마이페이지';
  }, [pathname]);

  const onClickBack = () => {
    router.back();
  };

  return (
    <CustomLayout
      right={
        defaultPage && <Image src={Alarm} alt='alarm' width={24} height={24} />
      }
      text={text}
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
