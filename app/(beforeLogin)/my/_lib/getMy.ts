import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type MyReportDataTypes = {
  category: string;
  count: number;
};

export type MyResponseTypes = {
  boardCnt: number;
  adoptedCnt: number;
  scrapCnt: number;
  report: MyReportDataTypes[];
};

export const getMy: QueryFunction<MyResponseTypes, [_1: string]> = async () => {
  return await GET<MyResponseTypes>({
    url: '/api/mypage',
  });
};
