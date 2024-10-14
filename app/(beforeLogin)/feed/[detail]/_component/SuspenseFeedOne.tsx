import {
  dehydrate,
  HydrationBoundary,
  InfiniteData,
  QueryClient,
} from '@tanstack/react-query';
import { getFeedOne } from '@/app/(beforeLogin)/feed/[detail]/_lib/getFeedOne';
import { ReactNode } from 'react';
import {
  FeedCommentResponseTypes,
  getFeedComment,
} from '@/app/(beforeLogin)/feed/[detail]/_lib/getFeedComment';

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
  await queryClient.prefetchInfiniteQuery<
    FeedCommentResponseTypes,
    object,
    InfiniteData<FeedCommentResponseTypes>,
    [_1: string, detail: number, _3: string],
    number
  >({
    queryKey: ['feed', id, 'comment'],
    queryFn: getFeedComment,
    initialPageParam: 1,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
