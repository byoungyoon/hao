'use client';

import Button from '@/app/components/button/Button';
import { useWritingForm } from '@/app/store/useTranslate';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useEffect, useMemo } from 'react';
import { useFeedSave } from '@/app/(beforeLogin)/writing/_state/useFeedSave';
import { makeFile } from '@/app/util/makeFile';

type Props = {
  isQuestion?: boolean;
};

export default function CustomButton({ isQuestion = false }: Props) {
  const { type, images, body, title, category, id, updateId } =
    useWritingForm();
  const { localData: userData } = useUser();

  const isResult = useMemo(() => {
    if (isQuestion && body.length !== 0) return true;

    return !(title.length === 0 || category === '' || body.length === 0);
  }, [title, category, isQuestion, body]);

  const { onResult, isPending } = useFeedSave();

  const onLocalResult = () => {
    onResult({
      id: id,
      subject: title,
      body: body,
      category: category,
      type: type,
      age: userData.age,
      image: images.map((image, index) => makeFile(image, `file${index}.png`)),
      isQuestion: isQuestion,
    });
  };

  useEffect(() => {
    return () => updateId(0);
  }, []);

  return (
    <Button
      size='long'
      text='공유할래!'
      color={isResult ? 'orange' : 'gray'}
      disabled={!isResult || isPending}
      onClick={onLocalResult}
    />
  );
}
