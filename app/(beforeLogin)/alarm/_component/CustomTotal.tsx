'use client';

import Body from '@/app/components/text/Body';
import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';

import * as styles from './customTotal.css';

export default function CustomTotal() {
  const { totalData } = useAlarm();

  return (
    <Body size='5' className={styles.total}>
      총 {totalData}개
    </Body>
  );
}
