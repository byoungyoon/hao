import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import {
  FeedDataTypes,
  FeedResponseTypes,
} from '@/app/(beforeLogin)/feed/_lib/getFeed';

import { useMemo } from 'react';
import {
  getMyFeed,
  MyFeedQueryKeyTypes,
} from '@/app/(beforeLogin)/my/[text]/_lib/getMyFeed';

type Props = {
  category: string;
  isAdopted: boolean;
};

export const useMyFeed = ({ category, isAdopted }: Props) => {
  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    FeedResponseTypes,
    object,
    InfiniteData<FeedResponseTypes>,
    MyFeedQueryKeyTypes,
    number
  >({
    queryKey: ['my', 'feed', category, isAdopted],
    queryFn: getMyFeed,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasPage) return undefined;

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
