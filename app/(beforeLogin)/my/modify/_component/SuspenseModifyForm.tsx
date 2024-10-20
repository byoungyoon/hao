import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getUser } from '@/app/(beforeLogin)/_lib/getUser';
import { getPoint } from '@/app/(afterLogin)/point/_lib/getPoint';
import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

export default async function SuspenseModifyForm({ children }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  await queryClient.prefetchQuery({
    queryKey: ['point'],
    queryFn: getPoint,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
