import { useQuery } from '@tanstack/react-query';
import { getMy } from '@/app/(beforeLogin)/my/_lib/getMy';
import { useMemo } from 'react';

export const useMy = () => {
  const { data } = useQuery({
    queryKey: ['my'],
    queryFn: getMy,
  });

  const localData = useMemo(() => {
    if (!data)
      return {
        boardCnt: 0,
        adoptedCnt: 0,
        scrapCnt: 0,
        report: [],
      };

    return data;
  }, [data]);

  return { localData };
};
