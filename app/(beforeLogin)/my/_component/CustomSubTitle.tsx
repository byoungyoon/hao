'use client';

import Body from '@/app/components/text/Body';
import { useMy } from '@/app/(beforeLogin)/my/_state/useMy';

import * as styles from './customSubTitle.css';

export default function CustomSubTitle() {
  const { localData: myData } = useMy();

  return (
    <Body size='5' className={styles.infoAside}>
      {myData.boardCnt !== 0
        ? '마음이 조금 가벼워졌길 바라!'
        : '후해로 구멍난 마음을 메꿔보자!'}
    </Body>
  );
}
