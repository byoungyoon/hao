import { GET } from '@/app/sevice/service';

export type FeedDataTypes = {
  id: number;
  subject: string;
  body: string;
  vote: number;
  commentCnt: number;
  thumbnail: string;
  userId: string;
  age: number;
  isAdopted: boolean;
  nickname: string;
  category: string;
  type: '후시딘' | '후추';
  createdAt: string;
  images: string[];
  isVoted: boolean;
  isBookmark: boolean;
  img: string;
  isQuestion: boolean;
  todayQuestion: string;
};

export type FeedResponseTypes = {
  hasPage: boolean;
  data: FeedDataTypes[];
  totalCnt: number;
};

type Props = {
  pageParam?: number;
  queryKey: [
    _1: string,
    age: number,
    category: string,
    sort: string,
    search: string,
  ];
};

export const getFeed = async ({ queryKey, pageParam }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, age, category, sort, search] = queryKey;

  const params = {
    category: category === '전체' ? '' : category,
    age: age === 0 ? '' : age,
    page: pageParam ?? 1,
    sort: sort,
    query: search,
  };

  return await GET<FeedResponseTypes>({
    url: '/api/board/list',
    parameters: params,
  });
};
