'use client';

import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';
import CustomItem from '@/app/(beforeLogin)/alarm/_component/CustomItem';
import CustomNoItem from '@/app/(beforeLogin)/alarm/_component/CustomNoItem';

export default function CustomItemGroup() {
  const { localData: alarmData } = useAlarm();

  if (alarmData.length === 0) return <CustomNoItem />;

  return alarmData.map((datum) => (
    <CustomItem
      key={datum.id}
      id={datum.id}
      age={datum.age}
      image={datum.image}
      nickname={datum.nickname}
      type={datum.msg}
      isAlive={datum.isAlive}
    />
  ));
}
