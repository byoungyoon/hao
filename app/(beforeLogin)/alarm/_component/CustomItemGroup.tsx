'use client';

import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';
import CustomItem from '@/app/(beforeLogin)/alarm/_component/CustomItem';

export default function CustomItemGroup() {
  const { localData: alarmData } = useAlarm();

  return alarmData.map((datum, index) => (
    <CustomItem
      key={index}
      age={datum.age}
      image={datum.image}
      nickname={datum.nickname}
      type={datum.msg}
      message={datum.body}
      isAlive={datum.isAlive}
    />
  ));
}
