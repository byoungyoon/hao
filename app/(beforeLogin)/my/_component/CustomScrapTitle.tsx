'use client';

import Body from '@/app/components/text/Body';
import { useMy } from '@/app/(beforeLogin)/my/_state/useMy';

import * as styles from './customScrapTitle.css';

export default function CustomScrapTitle() {
  const { localData: myData } = useMy();

  return (
    <Body size='3' className={styles.infoLayerText}>
      {myData.scrapCnt}개
    </Body>
  );
}
