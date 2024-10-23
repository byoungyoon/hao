'use client';

import Arrow from '@/app/icon/arrow-left.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function BackButton() {
  const router = useRouter();

  const onClickBack = () => {
    router.back();
  };

  return (
    <Image
      src={Arrow}
      alt='arrow'
      width={24}
      height={24}
      onClick={onClickBack}
    />
  );
}
