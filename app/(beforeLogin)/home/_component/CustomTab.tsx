'use client';

import { useMemo } from 'react';
import CategoryTab from '@/app/components/tab/CategoryTab';

export default function CustomTab() {
  const data = useMemo(
    () => [
      {
        text: '전체',
      },
      {
        text: '10대',
      },
      {
        text: '20대',
      },
      {
        text: '30대',
      },
    ],
    [],
  );

  return <CategoryTab data={data} defaultSelect='전체' />;
}
