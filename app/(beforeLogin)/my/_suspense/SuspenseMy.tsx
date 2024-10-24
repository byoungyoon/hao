import React, { ReactNode } from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { userKey } from '@/app/provider/keyData';
import { getMy } from '@/app/(beforeLogin)/my/_lib/getMy';

type Props = {
  children: ReactNode;
};

export default async function SuspenseMy({ children }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(userKey);
  await queryClient.prefetchQuery({
    queryKey: ['my'],
    queryFn: getMy,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
