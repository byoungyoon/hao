'use client';

import { useAlarm } from '@/app/(beforeLogin)/alarm/_state/useAlarm';

import * as styles from './page.css';

export default function AlarmPage() {
  const { localData: alarmData } = useAlarm();

  console.log(alarmData);

  return (
    <section className={styles.section}>
      {/*{alarmData.map((datum, index) => (*/}
      {/*  <CustomItem*/}
      {/*    key={index}*/}
      {/*    age={datum.age}*/}
      {/*    image={datum.image}*/}
      {/*    nickname={datum.nickname}*/}
      {/*    type={datum.type}*/}
      {/*  />*/}
      {/*))}*/}
    </section>
  );
}
