'use client';

import AlarmOn from '@/app/icon/alarm-on.svg';
import AlarmOff from '@/app/icon/alarm.svg';
import Image from 'next/image';
import { useParams, useRouter } from 'next/navigation';
import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';

import * as styles from './customAlarm.css';

type Props = {
  isHome?: boolean;
};

export default function CustomAlarm({ isHome }: Props) {
  const router = useRouter();
  const params = useParams<{ detail: string }>();

  const { totalData } = useAlarm();

  const onClickAlarm = () => {
    router.push('/alarm');
  };

  if (params.detail) return <></>;
  if (!isHome)
    return (
      <Image
        src={totalData === 0 ? AlarmOff.src : AlarmOn.src}
        alt='alarm'
        width={24}
        height={24}
        onClick={onClickAlarm}
      />
    );

  return (
    <div className={styles.alarmLayer}>
      <Image
        className={styles.alarm}
        src={totalData === 0 ? AlarmOff.src : AlarmOn.src}
        alt='alarm'
        width={24}
        height={24}
        onClick={onClickAlarm}
      />
    </div>
  );
}
