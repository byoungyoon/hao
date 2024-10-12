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
  });

  const localData = useMemo(() => {
    if (!data) return [] as CategoryResponseTypes[];

    return data;
  }, [data]);

  return { localData };
};
