'use client';

import Body from '@/app/components/text/Body';
import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';

import * as styles from './customTotal.css';

export default function CustomTotal() {
  const { localData: alarmData } = useAlarm();

  return (
    <Body size='5' className={styles.total}>
      총 {alarmData.length}개
    </Body>
  );
}
