'use client';

import { useMutation } from '@tanstack/react-query';
import { postToken } from '@/app/(afterLogin)/auth/[token]/_lib/postToken';
import { useEffect } from 'react';

type Props = {
  params: { token: string };
};

export default function AuthTokenPage({ params }: Props) {
  const { data, mutate: onAction } = useMutation({
    mutationKey: ['token'],
    mutationFn: postToken,
  });

  useEffect(() => {
    onAction({ token: params.token });
  }, [params.token]);

  return (
    <div>
      token: {data?.token}
      role : {data?.role}
    </div>
  );
}
