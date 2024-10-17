'use client';

import Button from '@/app/components/button/Button';
import { useAgeForm } from '@/app/store/useTranslate';
import { useMemo } from 'react';
import { useRouter } from 'next/navigation';

export default function CustomResult() {
  const { age } = useAgeForm();
  const router = useRouter();

  const isResult = useMemo(() => age !== 0, [age]);

  const onResult = () => {
    router.push('/point');
  };

  return (
    <Button
      size='long'
      text='했어!'
      color={isResult ? 'orange' : 'gray'}
      disabled={!isResult}
      onClick={onResult}
    />
  );
}
