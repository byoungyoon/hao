'use client';

import { useParams, useRouter } from 'next/navigation';
import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';
import AlarmOffIcon from '@/app/components/svg/AlarmOffIcon';
import AlarmOnIcon from '@/app/components/svg/AlarmOnIcon';
import { vars } from '@/app/theme.css';

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
      <span onClick={onClickAlarm}>
        {totalData === 0 ? (
          <AlarmOffIcon />
        ) : (
          <AlarmOnIcon color={vars.color.orange['300']} />
        )}
      </span>
    );

  return (
    <div className={styles.alarmLayer}>
      <span onClick={onClickAlarm} className={styles.alarm}>
        {totalData === 0 ? (
          <AlarmOffIcon />
        ) : (
          <AlarmOnIcon color={vars.color.orange['300']} />
        )}
      </span>
    </div>
  );
}
