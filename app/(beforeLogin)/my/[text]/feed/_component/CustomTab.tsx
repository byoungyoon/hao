'use client';

import CategoryTab from '@/app/components/tab/CategoryTab';
import { useFeedForm } from '@/app/store/useTranslate';

export default function CustomTab() {
  const { isAdopted, updateIsAdopted } = useFeedForm();

  const onTrackableTab = (value: number) => {
    updateIsAdopted(value === 0);
  };

  return (
    <CategoryTab
      data={[
        { value: 0, text: '채택완료' },
        { value: 1, text: '미채택' },
      ]}
      defaultSelect={isAdopted ? 0 : 1}
      onTrackable={onTrackableTab}
    />
  );
}
