import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import {
  FeedDataTypes,
  FeedResponseTypes,
  getFeed,
} from '@/app/(beforeLogin)/feed/_lib/getFeed';
import { useMemo } from 'react';

type Props = {
  age: number;
  category: string;
  sort: string;
};

export const useFeed = ({ age, category, sort }: Props) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    FeedResponseTypes,
    object,
    InfiniteData<FeedResponseTypes>,
    [_1: string, age: number, category: string, sort: string],
    number
  >({
    queryKey: ['feed', age, category, sort],
    queryFn: getFeed,
    initialPageParam: 1,
    getNextPageParam: (nextPage, allPages) => {
      if (!nextPage.hasPage) return undefined;

      return allPages.length + 1;
    },
    staleTime: 1000 * 60 * 5,
    gcTime: 1000 * 60 * 5 * 2,
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
