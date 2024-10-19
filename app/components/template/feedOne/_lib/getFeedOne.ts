import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type FeedOneResponseTypes = {
  id: number;
  subject: string;
  body: string;
  vote: number;
  commentCnt: number;
  thumbnail: string;
  userId: string;
  age: number;
  isAdopte: boolean;
  nickname: string;
  category: string;
  type: '후추' | '후시딘';
  createdAt: string;
  images?: string[];
  isVoted: boolean;
  isBookmark: boolean;
  isQuestion: boolean;
  img: string;
};

export const getFeedOne: QueryFunction<
  FeedOneResponseTypes,
  [_1: string, detail: number]
> = async ({ queryKey }) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, detail] = queryKey;

  return await GET<FeedOneResponseTypes>({
    url: `/api/board/${detail}`,
  });
};
