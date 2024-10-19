'use client';

import Button from '@/app/components/button/Button';
import { useMutation } from '@tanstack/react-query';
import { postOb } from '@/app/(afterLogin)/result/_lib/postOb';
import { useAgeForm, usePointForm } from '@/app/store/useTranslate';
import { useRouter } from 'next/navigation';

export default function CustomButton() {
  const router = useRouter();
  const { point, nickname } = usePointForm();
  const { age } = useAgeForm();

  const { mutate: onAction } = useMutation({
    mutationKey: ['save'],
    mutationFn: postOb,
    onSuccess: ({ token }) => {
      localStorage.setItem('token', token);

      router.push('/home');
    },
  });

  const onResult = () => {
    onAction({ age: age, nickname: nickname, charaterId: point });
  };

  return (
    <Button size='long' text='후~하러갈래!' color='orange' onClick={onResult} />
  );
}
