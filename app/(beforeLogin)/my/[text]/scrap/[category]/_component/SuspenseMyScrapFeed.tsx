import {
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient,
} from '@tanstack/react-query';
import { getMyScrapFeed } from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_lib/getMyScrapFeed';
import { ReactNode } from 'react';
import { FeedResponseTypes } from '@/app/(beforeLogin)/feed/_lib/getFeed';

type Props = {
  category: string;
  children: ReactNode;
};

export default async function SuspenseMyScrapFeed({
  category,
  children,
}: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchInfiniteQuery<
    FeedResponseTypes,
    object,
    InfiniteData<FeedResponseTypes>,
    [_1: string, _2: string, _3: string, category: string],
    number
  >({
    queryKey: ['feed', 'my', 'scrap', category],
    queryFn: getMyScrapFeed,
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
