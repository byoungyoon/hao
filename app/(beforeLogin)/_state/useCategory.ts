import { useQuery } from '@tanstack/react-query';
import {
  CategoryResponseTypes,
  getCategory,
} from '@/app/(beforeLogin)/_lib/getCategory';
import { useMemo } from 'react';

export const useCategory = () => {
  const { data } = useQuery({
    queryKey: ['category'],
    queryFn: getCategory,
    staleTime: 1000 * 60 * 60 * 24,
    gcTime: 1000 * 60 * 60 * 24 * 2,
  });

  const localData = useMemo(() => {
    if (!data) return [] as CategoryResponseTypes[];

    return data;
  }, [data]);

  return { localData };
};
