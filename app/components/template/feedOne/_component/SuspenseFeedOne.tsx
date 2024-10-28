import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';
import { getFeedOne } from '@/app/components/template/feedOne/_lib/getFeedOne';
import { todayKey, userKey } from '@/app/provider/keyData';

type Props = {
  children: ReactNode;
  id: number;
};

export default async function SuspenseFeedOne({ id, children }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['feed', id],
    queryFn: getFeedOne,
  });
  await queryClient.prefetchQuery(todayKey);
  await queryClient.prefetchQuery(userKey);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
