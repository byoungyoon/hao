import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type TokenResponseTypes = {
  token: string;
  role: string;
};

export const getToken: QueryFunction<
  TokenResponseTypes,
  [_1: string, toekn: string]
> = async ({ queryKey }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, token] = queryKey;

  const params = {
    token: token,
  };

  return await GET<TokenResponseTypes>({
    url: '/api/user/save',
    parameters: params,
  });
};
