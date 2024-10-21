'use client';

import { useEffect, useMemo } from 'react';
import CategoryTab from '@/app/components/tab/CategoryTab';
import { useFeedForm } from '@/app/store/useTranslate';

export default function CustomTab() {
  const updateAge = useFeedForm((state) => state.updateAge);

  const data = useMemo(
    () => [
      {
        text: '전체',
        value: 0,
      },
      {
        text: '10대',
        value: 10,
      },
      {
        text: '20대',
        value: 20,
      },
      {
        text: '30대',
        value: 30,
      },
    ],
    [],
  );

  const onTrackableTab = (tab: number) => {
    updateAge(tab);
  };

  useEffect(() => {
    return () => updateAge(0);
  }, [updateAge]);

  return (
    <CategoryTab data={data} defaultSelect={0} onTrackable={onTrackableTab} />
  );
}
