'use client';

import Button from '@/app/components/button/Button';
import { useWritingForm } from '@/app/store/useTranslate';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useMemo } from 'react';
import { useFeedSave } from '@/app/(beforeLogin)/writing/_state/useFeedSave';

type Props = {
  isQuestion: boolean;
};

export default function CustomButton({ isQuestion }: Props) {
  const { type, images, body, title, category } = useWritingForm();
  const { localData: userData } = useUser();

  const isResult = useMemo(() => {
    if (title.length < 2 || title.length > 15 || category === '') return false;

    return true;
  }, [title, category]);

  const base64ToFile = (base64String: string, filename: string) => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Uint8Array(byteCharacters.length);

    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const blob = new Blob([byteNumbers], { type: 'image/png' });
    return new File([blob], filename, { type: blob.type });
  };

  const { onResult } = useFeedSave();

  const onLocalResult = () => {
    onResult({
      subject: title,
      body: body,
      category: category,
      type: type,
      age: userData.age,
      image: images.map((image, index) =>
        base64ToFile(image, `file${index}.png`),
      ),
      isQuestion: isQuestion,
    });
  };

  return (
    <Button
      size='long'
      text='공유할래!'
      color={isResult ? 'orange' : 'gray'}
      disabled={!isResult}
      onClick={onLocalResult}
    />
  );
}
