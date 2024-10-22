import { ReactNode } from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getToday } from '@/app/(beforeLogin)/_lib/getToday';

type Props = {
  children: ReactNode;
};

export default async function SuspenseToday({ children }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['today'],
    queryFn: getToday,
    staleTime: 1000 * 60 * 60 * 12,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
