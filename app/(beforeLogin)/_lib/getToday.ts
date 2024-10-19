import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type TodayResponseTypes = {
  body: string;
  category: string;
};

export const getToday: QueryFunction<
  TodayResponseTypes,
  [_1: string]
> = async () => {
  return await GET<TodayResponseTypes>({ url: '/api/question/today' });
};
