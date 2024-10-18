import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import {
  FeedDataTypes,
  FeedResponseTypes,
} from '@/app/(beforeLogin)/feed/_lib/getFeed';
import { getMyScrapFeed } from '@/app/(beforeLogin)/my/scrap/[category]/_lib/getMyScrapFeed';
import { useMemo } from 'react';

type Props = {
  category: string;
};

export const useMyScrapFeed = ({ category }: Props) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    FeedResponseTypes,
    object,
    InfiniteData<FeedResponseTypes>,
    [_1: string, _2: string, _3: string, category: string],
    number
  >({
    queryKey: ['my', 'scrap', 'feed', category],
    queryFn: getMyScrapFeed,
    initialPageParam: 1,
    getNextPageParam: (nextPage, allPages) => {
      if (!nextPage.hasPage) return undefined;

      return allPages.length + 1;
    },
  });

  const localData = useMemo(() => {
    if (!data) return [] as FeedDataTypes[];

    return data.pages.reduce((curr, next) => {
      const result = [...curr];

      return result.concat(next.data);
    }, [] as FeedDataTypes[]);
  }, [data]);

  return { localData, hasNextPage, fetchNextPage };
};
