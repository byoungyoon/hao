import { MutationFunction } from '@tanstack/react-query';
import { PUT } from '@/app/sevice/service';

export type UpdateUserRequestTypes = {
  nickname: string;
  age: number;
  characterId: number;
};

export const putUpdateUser: MutationFunction<
  object,
  UpdateUserRequestTypes
> = async ({ age, nickname, characterId }) => {
  const params = {
    age: age,
    nickname: nickname,
    characterId: characterId,
  };

  return await PUT({
    url: '/api/user/update/profile',
    parameters: params,
  });
};
