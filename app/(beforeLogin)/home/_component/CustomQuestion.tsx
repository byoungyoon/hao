'use client';

import InfoLayer from '@/app/components/layer/InfoLayer';
import Body from '@/app/components/text/Body';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';

import * as styles from './customQuestion.css';

export default function CustomQuestion() {
  const { localData: todayData } = useToday();

  return (
    <div className={styles.question}>
      <span>
        <InfoLayer text={todayData.category} color='orange' />
      </span>
      <Body size='3'>{todayData.body}</Body>
    </div>
  );
}
