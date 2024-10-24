'use client';

import CategoryTab from '@/app/components/tab/CategoryTab';
import { useFeedForm } from '@/app/store/useTranslate';
import { useEffect } from 'react';

export default function CustomTab() {
  const { updateIsAdopted } = useFeedForm();

  const onTrackableTab = (value: number) => {
    updateIsAdopted(value === 0);
  };

  useEffect(() => {
    return () => updateIsAdopted(true);
  }, []);

  return (
    <CategoryTab
      data={[
        { value: 0, text: '채택완료' },
        { value: 1, text: '미채택' },
      ]}
      defaultSelect={0}
      onTrackable={onTrackableTab}
    />
  );
}
