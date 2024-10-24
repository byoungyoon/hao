import { FeedResponseTypes } from '@/app/(beforeLogin)/feed/_lib/getFeed';
import { GET } from '@/app/sevice/service';

export type MyFeedQueryKeyTypes = [
  _1: string,
  _2: string,
  category: string,
  isAdopted: boolean,
];

type Props = {
  pageParam?: number;
  queryKey: MyFeedQueryKeyTypes;
};

export const getMyFeed = async ({ queryKey, pageParam }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, _2, category, isAdopted] = queryKey;

  const params = {
    page: pageParam ?? 1,
    category: category === '전체' ? '' : category,
    isAdopted: isAdopted,
  };

  return await GET<FeedResponseTypes>({
    url: '/api/mypage/board/list',
    parameters: params,
  });
};
