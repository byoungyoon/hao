import { useQuery } from '@tanstack/react-query';
import { getMyScrap } from '@/app/(beforeLogin)/my/[text]/scrap/_lib/getMyScrap';
import { useMemo } from 'react';

export const useMyScrap = () => {
  const { data } = useQuery({
    queryKey: ['my', 'scrap'],
    queryFn: getMyScrap,
  });

  const localData = useMemo(() => {
    if (!data) return [];

    return data;
  }, [data]);

  return { localData };
};
