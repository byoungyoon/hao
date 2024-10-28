'use client';

import AlarmOn from '@/app/icon/alarm-on.png';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function CustomAlarm() {
  const router = useRouter();

  const onClickAlarm = () => {
    router.push('/alarm');
  };

  return (
    <Image
      src={AlarmOn}
      alt='alarm'
      width={24}
      height={24}
      onClick={onClickAlarm}
    />
  );
}
