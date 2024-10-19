'use client';

import { useQuery } from '@tanstack/react-query';
import { getToken } from '@/app/_lib/getToken';

type Props = {
  params: { token: string };
};

export default function AuthTokenPage({ params }: Props) {
  const { data } = useQuery({
    queryKey: ['token', params.token],
    queryFn: getToken,
    enabled: !!params.token,
  });

  return (
    <div>
      {data?.token}
      {data?.role}
    </div>
  );
}
