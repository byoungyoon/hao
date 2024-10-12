import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type Top5ResponseTypes = {
  id: number;
  subject: string;
  body: string;
  vote: number;
  commentCnt: number;
  thumbnail: string;
  userId: string;
  age: number;
  nickname: string;
  category: string;
  type: string;
  createdAt: string;
  totalCount: number;
};

export const getTop5: QueryFunction<
  Top5ResponseTypes[],
  [_1: string, age: number]
> = async ({ queryKey }) => {
  const [_1, age] = queryKey;

  const params = {
    age: age,
  };

  return await GET<Top5ResponseTypes[]>({
    url: '/api/board/top5',
    parameters: age !== 0 ? params : {},
  });
};
