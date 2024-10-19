import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type ObRequestTypes = {
  age: number;
  nickname: string;
  characterId: number;
};

export type ObResponseTypes = {
  role: string;
  token: string;
};

export const postOb: MutationFunction<
  ObResponseTypes,
  ObRequestTypes
> = async ({ age, characterId, nickname }) => {
  const params = {
    age: age,
    nickname: nickname,
    characterId: characterId,
  };

  return await POST<ObResponseTypes>({
    url: '/api/user/ob',
    parameters: params,
  });
};
