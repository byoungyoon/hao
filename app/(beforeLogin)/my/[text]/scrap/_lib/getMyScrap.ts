import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type MyScrapResponseTypes = {
  image: string;
  name: string;
  count: number;
}[];

export const getMyScrap: QueryFunction<
  MyScrapResponseTypes,
  [_1: string, _2: string]
> = async () => {
  return GET<MyScrapResponseTypes>({
    url: '/api/scrap',
  });
};
