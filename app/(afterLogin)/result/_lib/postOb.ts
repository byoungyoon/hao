import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type ObRequestTypes = {
  age: number;
  nickname: string;
  charaterId: number;
};

export type ObResponseTypes = {
  role: string;
  token: string;
};

export const postOb: MutationFunction<
  ObResponseTypes,
  ObRequestTypes
> = async ({ age, charaterId, nickname }) => {
  const params = {
    age: age,
    nickanem: nickname,
    charaterId: charaterId,
  };

  return await POST<ObResponseTypes>({
    url: '/api/user/ob',
    parameters: params,
  });
};
