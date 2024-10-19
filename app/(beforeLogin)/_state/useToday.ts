import { useQuery } from '@tanstack/react-query';
import { getToday } from '@/app/(beforeLogin)/_lib/getToday';
import { useMemo } from 'react';

export const useToday = () => {
  const { data } = useQuery({
    queryKey: ['today'],
    queryFn: getToday,
  });

  const localData = useMemo(() => {
    if (!data)
      return {
        category: '',
        body: '',
      };

    return {
      category: data.category,
      body: data.body,
    };
  }, [data]);

  return { localData };
};
