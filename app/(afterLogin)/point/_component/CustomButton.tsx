'use client';

import Button from '@/app/components/button/Button';
import { usePointForm } from '@/app/store/useTranslate';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function CustomButton() {
  const { point, nickname } = usePointForm();
  const router = useRouter();

  const isResult = useMemo(
    () => point !== 0 && nickname.length >= 2 && nickname.length <= 5,
    [point, nickname],
  );

  const onResult = () => {
    router.push('/result');
  };

  return (
    <Button
      size='long'
      text='완벽해!'
      color={isResult ? 'orange' : 'gray'}
      disabled={!isResult}
      onClick={onResult}
    />
  );
}
