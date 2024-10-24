'use client';

import Body from '@/app/components/text/Body';
import { useMy } from '@/app/(beforeLogin)/my/_state/useMy';

import * as styles from './customMyTitle.css';

export default function CustomMyTitle() {
  const { localData: myData } = useMy();

  return (
    <Body size='3' className={styles.infoLayerText}>
      {myData.boardCnt}개
    </Body>
  );
}
