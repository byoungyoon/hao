'use client';

import Button from '@/app/components/button/Button';
import { useAgeForm, usePointForm } from '@/app/store/useTranslate';
import { useMemo } from 'react';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { putUpdateUser } from '@/app/(beforeLogin)/my/[text]/modify/_lib/putUpdateUser';
import { useToast } from '@/app/store/useToast';

export default function CustomButton() {
  const queryClient = useQueryClient();
  const router = useRouter();

  const { localData: userData } = useUser();
  const updateToast = useToast((state) => state.updateToast);

  const { age } = useAgeForm();
  const { point, nickname } = usePointForm();

  const localResult = useMemo(() => {
    return {
      age: age === 0 ? userData.age : age,
      point: point === 0 ? userData.characterId : point,
      nickname: nickname === '' ? userData.nickname : nickname,
    };
  }, [age, point, nickname, userData]);

  const isResult = useMemo(() => {
    if (
      localResult.age === userData.age &&
      localResult.point === userData.characterId &&
      localResult.nickname === userData.nickname
    )
      return false;

    if (localResult.nickname.length < 2 || localResult.nickname.length > 8)
      return false;

    if (localResult.age === 10) return [1, 2, 3].includes(localResult.point);
    if (localResult.age === 20) return [4, 5, 6].includes(localResult.point);
    if (localResult.age === 30) return [7, 8, 9].includes(localResult.point);

    return true;
  }, [localResult.age, localResult.nickname, localResult.point, userData]);

  const { mutate: onAction } = useMutation({
    mutationKey: ['my', 'modify'],
    mutationFn: putUpdateUser,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['user'],
      });

      updateToast('변신 완료!');
      router.replace('/my');
    },
  });

  const onResult = () => {
    onAction({
      age: localResult.age,
      characterId: localResult.point,
      nickname: localResult.nickname,
    });
  };

  return (
    <Button
      size='long'
      text='이걸로 할래!'
      color={isResult ? 'orange' : 'gray'}
      disabled={!isResult}
      onClick={onResult}
    />
  );
}
