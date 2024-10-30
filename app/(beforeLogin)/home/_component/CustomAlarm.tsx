'use client';

import AlarmOn from '@/app/icon/alarm-on.png';
import AlarmOff from '@/app/icon/alarm.png';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';

import * as styles from './customAlarm.css';
import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';

export default function CustomAlarm() {
  const router = useRouter();
  const params = useParams<{ detail: string }>();

  const { localData: alarmData } = useAlarm();

  const onClickAlarm = () => {
    router.push('/alarm');
  };

  return (
    !params.detail && (
      <div className={styles.alarmLayer}>
        <Image
          className={styles.alarm}
          src={alarmData.length === 0 ? AlarmOff.src : AlarmOn.src}
          alt='alarm'
          width={24}
          height={24}
          onClick={onClickAlarm}
        />
      </div>
    )
  );
}
