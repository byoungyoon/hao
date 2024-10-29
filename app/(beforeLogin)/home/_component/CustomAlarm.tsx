'use client';

import AlarmOn from '@/app/icon/alarm-on.png';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import * as styles from './customAlarm.css';

export default function CustomAlarm() {
  const router = useRouter();
  const params = useParams<{ detail: string }>();

  const onClickAlarm = () => {
    router.push('/alarm');
  };

  return (
    !params.detail && (
      <div className={styles.alarmLayer}>
        <Image
          className={styles.alarm}
          src={AlarmOn}
          alt='alarm'
          width={24}
          height={24}
          onClick={onClickAlarm}
        />
      </div>
    )
  );
}
