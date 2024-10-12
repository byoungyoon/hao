'use client';

import { useMemo } from 'react';
import CategoryTab from '@/app/components/tab/CategoryTab';

type Props = {
  onTrackable: (value: number) => void;
};

export default function CustomTab({ onTrackable }: Props) {
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

  return (
    <CategoryTab data={data} defaultSelect={0} onTrackable={onTrackable} />
  );
}
