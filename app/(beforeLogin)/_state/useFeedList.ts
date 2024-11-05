import {
  FeedDataTypes,
  FeedResponseTypes,
} from '@/app/(beforeLogin)/feed/_lib/getFeed';
import {
  InfiniteData,
  QueryKey,
  useInfiniteQuery,
} from '@tanstack/react-query';
import { useEffect, useMemo, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

type Props<T> = {
  queryKey: T;
  queryFn: (props: {
    pageParam?: number;
    queryKey: T;
  }) => Promise<FeedResponseTypes>;
};

export const useFeedList = <T extends QueryKey>({
  queryKey,
  queryFn,
}: Props<T>) => {
  const divRef = useRef<HTMLDivElement | null>(null);

  const { data, hasNextPage, fetchNextPage } = useInfiniteQuery<
    FeedResponseTypes,
    object,
    InfiniteData<FeedResponseTypes>,
    T,
    number
  >({
    queryKey: queryKey,
    queryFn: queryFn,
    staleTime: 1000 * 60 * 3,
    gcTime: 1000 * 60 * 5,
    initialPageParam: 1,
    getNextPageParam: (nextPage, allPages) => {
      if (!nextPage.hasPage) return undefined;

      return allPages.length + 1;
    },
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement | null) => {
    ref(node!);
    divRef.current = node;
  };

  const localData = useMemo(() => {
    if (!data) return [] as FeedDataTypes[];

    return data.pages.reduce((curr, next) => {
      const result = [...curr];

      return result.concat(next.data);
    }, [] as FeedDataTypes[]);
  }, [data]);

  const totalData = useMemo(() => {
    if (!data) return 0;

    return data.pages[0].totalCnt;
  }, [data]);

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return { localData, hasNextPage, fetchNextPage, setRefs, totalData };
};
