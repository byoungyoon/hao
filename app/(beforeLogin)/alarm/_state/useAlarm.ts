import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query';
import {
  AlarmResponseTypes,
  getAlarm,
} from '@/app/(beforeLogin)/alarm/_lib/getAlarm';
import { useMemo } from 'react';

export const useAlarm = () => {
  const { data } = useInfiniteQuery<
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

    return data;
  }, [data]);

  return { localData };
};
