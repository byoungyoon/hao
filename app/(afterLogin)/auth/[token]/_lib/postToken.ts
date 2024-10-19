import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type TokenRequestTypes = {
  token: string;
};

export type TokenResponseTypes = {
  token: string;
  role: string;
};

export const postToken: MutationFunction<
  TokenResponseTypes,
  TokenRequestTypes
> = async ({ token }) => {
  const params = {
    token: token,
  };

  return await POST<TokenResponseTypes>({
    url: '/api/user/save',
    parameters: params,
  });
};
