import { FeedResponseTypes } from '@/app/(beforeLogin)/feed/_lib/getFeed';
import { GET } from '@/app/sevice/service';

export type MyCategoryFeedQueryKey = [
  _1: string,
  _2: string,
  _3: string,
  cateogry: string,
];

type Props = {
  pageParam?: number;
  queryKey: MyCategoryFeedQueryKey;
};

export const getMyCategoryFeed = async ({ pageParam, queryKey }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, _2, _3, category] = queryKey;

  const params = {
    category: category,
    page: pageParam ?? 1,
  };

  return await GET<FeedResponseTypes>({
    url: '/api/mypage/board/report',
    parameters: params,
  });
};
