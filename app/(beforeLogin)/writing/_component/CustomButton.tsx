'use client';

import Button from '@/app/components/button/Button';
import { useWritingForm } from '@/app/store/useTranslate';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useMemo } from 'react';

export default function CustomButton() {
  const { type, images, body, title, category } = useWritingForm();
  const { localData: userData } = useUser();

  const isResult = useMemo(() => {
    if (title.length < 2 || title.length > 15 || category === '') return false;

    return true;
  }, []);

  const onResult = () => {};

  return (
    <Button
      size='long'
      text='공유할래!'
      color={isResult ? 'orange' : 'gray'}
      disabled={!isResult}
    />
  );
}
