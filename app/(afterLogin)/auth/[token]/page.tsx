'use client';

import { useMutation } from '@tanstack/react-query';
import { postToken } from '@/app/(afterLogin)/auth/[token]/_lib/postToken';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  params: { token: string };
};

export default function AuthTokenPage({ params }: Props) {
  const router = useRouter();

  const { mutate: onAction } = useMutation({
    mutationKey: ['token'],
    mutationFn: postToken,
    onSuccess: ({ token, role }) => {
      localStorage.setItem('token', token);

      router.replace(role === '임시' ? '/age' : '/home');
    },
    onError: () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).LogoutHandler.postMessage('');
    },
  });

  useEffect(() => {
    onAction({ token: params.token });
  }, [params.token]);

  return null;
}
