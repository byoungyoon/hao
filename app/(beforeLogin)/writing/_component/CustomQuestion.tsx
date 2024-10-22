'use client';

import { useToday } from '@/app/(beforeLogin)/_state/useToday';
import InfoLayer from '@/app/components/layer/InfoLayer';
import Body from '@/app/components/text/Body';

import * as styles from './customQuestion.css';

export default function CustomQuestion() {
  const { localData: todayData } = useToday();

  return (
    <div className={styles.question}>
      <span>
        <InfoLayer text='오늘의 질문' color='orange' />
      </span>
      <Body size='5' className={styles.text}>
        Q. {todayData.body}
      </Body>
    </div>
  );
}
