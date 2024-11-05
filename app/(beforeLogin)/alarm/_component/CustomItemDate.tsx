import { useMemo } from 'react';
import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import duration from 'dayjs/plugin/duration';
import Body from '@/app/components/text/Body';
import * as styles from './customitemDate.css';

type Props = {
  date: string;
};

dayjs.extend(utc);
dayjs.extend(duration);

export default function CustomItemDate({ date }: Props) {
  const localTime = useMemo(() => {
    const time = dayjs(date);
    const now = dayjs();
    const diffInMinutes = now.diff(time, 'minute');
    const diffInHours = now.diff(time, 'hour');

    if (diffInMinutes < 60) {
      if (diffInMinutes === 0) {
        return '방금';
      } else if (diffInMinutes === 1) {
        return '최근 1분 전';
      } else {
        return `최근 ${diffInMinutes}분 전`;
      }
    } else if (diffInHours < 24) {
      return `${diffInHours}시간 전`;
    } else {
      const diffInDays = now.diff(time, 'day');
      return `${diffInDays}일 전`;
    }
  }, [date]);

  return (
    <Body size='5' className={styles.date}>
      {localTime}
    </Body>
  );
}
