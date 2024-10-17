import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type PointResponseTypes = string[];

export const getPoint: QueryFunction<
  PointResponseTypes,
  [_1: string]
> = async () => {
  const params = {
    type: '프로필',
  };

  return await GET<PointResponseTypes>({
    url: '/api/image/list',
    parameters: params,
  });
};
