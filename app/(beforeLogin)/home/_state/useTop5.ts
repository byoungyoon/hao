import { useQuery } from '@tanstack/react-query';
import {
  getTop5,
  Top5ResponseTypes,
} from '@/app/(beforeLogin)/home/_lib/getTop5';
import { useMemo } from 'react';

type Props = {
  age: number;
};

export const useTop5 = ({ age }: Props) => {
  const { data, isPending } = useQuery({
    queryKey: ['top5', age],
    queryFn: getTop5,
    staleTime: 1000 * 60 * 3,
    gcTime: 1000 * 60 * 5,
  });

  const localData = useMemo(() => {
    if (!data) return [] as Top5ResponseTypes[];

    return data;
  }, [data]);

  return { localData, isPending };
};
