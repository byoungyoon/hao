'use client';

import { useParams } from 'next/navigation';
import Alarm from '@/app/icon/alarm.png';
import Image from 'next/image';

export default function CustomAlarm() {
  const params = useParams<{ detail: string }>();

  return (
    !params.detail && <Image src={Alarm} alt='alarm' width={24} height={24} />
  );
}
