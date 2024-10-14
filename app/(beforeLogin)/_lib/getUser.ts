import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type UserResponseTypes = {
  id: number;
  userId: string;
  age: number;
  characterId: number;
  nickname: string;
  profile: string;
};

export const getUser: QueryFunction<
  UserResponseTypes,
  [_1: string]
> = async () => {
  return await GET<UserResponseTypes>({
    url: `/api/user/profile`,
  });
};
