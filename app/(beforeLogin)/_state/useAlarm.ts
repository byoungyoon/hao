import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import {
  AlarmDataTypes,
  AlarmResponseTypes,
  getAlarm,
} from '@/app/(beforeLogin)/_lib/getAlarm';
import { useMemo } from 'react';

export const useAlarm = () => {
  const { data, fetchNextPage, hasNextPage } = useInfiniteQuery<
    AlarmResponseTypes,
    object,
    InfiniteData<AlarmResponseTypes>,
    [_1: string],
    number
  >({
    queryKey: ['alarm'],
    queryFn: getAlarm,
    staleTime: 30 * 1000,
    refetchInterval: 30 * 1000,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (!lastPage.hasPage) return undefined;

      return allPages.length + 1;
    },
  });

  const localData = useMemo(() => {
    if (!data) return [];

    return data.pages.reduce<AlarmDataTypes[]>((curr, next) => {
      const result = [...curr];

      return result.concat(next.data);
    }, []);
  }, [data]);

  const totalData = useMemo(() => {
    if (!data) return [];

    return data.pages[0].totalCnt;
  }, [data]);

  return { localData, fetchNextPage, hasNextPage, totalData };
};
