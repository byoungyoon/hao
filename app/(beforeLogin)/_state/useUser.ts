import { useQuery } from '@tanstack/react-query';
import { getUser } from '@/app/(beforeLogin)/_lib/getUser';
import { useMemo } from 'react';

export const useUser = () => {
  const { data } = useQuery({
    queryKey: ['user'],
    queryFn: getUser,
  });

  const localData = useMemo(() => {
    if (!data)
      return {
        id: 0,
        userId: '',
        age: 0,
        characterId: 0,
        nickname: '',
        profile: '',
      };

    return data;
  }, [data]);

  return { localData };
};
