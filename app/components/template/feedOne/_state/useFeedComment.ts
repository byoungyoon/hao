import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import {
  FeedCommentDataTypes,
  FeedCommentResponseTypes,
  getFeedComment,
} from '@/app/components/template/feedOne/_lib/getFeedComment';

type Props = {
  id: number;
};

export const useFeedComment = ({ id }: Props) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    FeedCommentResponseTypes,
    object,
    InfiniteData<FeedCommentResponseTypes>,
    [_1: string, detail: number, _3: string],
    number
  >({
    queryKey: ['feed', id, 'comment'],
    queryFn: getFeedComment,
    initialPageParam: 1,
    getNextPageParam: (nextPage, allPages) => {
      if (!nextPage.hasPage) return undefined;

      return allPages.length + 1;
    },
  });

  const localData = useMemo(() => {
    if (!data) return [] as FeedCommentDataTypes[];

    return data.pages.reduce((curr, next) => {
      const result = [...curr];

      return result.concat(next.data);
    }, [] as FeedCommentDataTypes[]);
  }, [data]);

  return { localData, hasNextPage, fetchNextPage };
};
