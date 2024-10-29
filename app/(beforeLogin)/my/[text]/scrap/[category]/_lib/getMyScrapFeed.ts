import { GET } from '@/app/sevice/service';
import { FeedResponseTypes } from '@/app/(beforeLogin)/feed/_lib/getFeed';

type Props = {
  pageParam?: number;
  queryKey: [_1: string, _2: string, _3: string, category: string];
};

export const getMyScrapFeed = async ({ pageParam, queryKey }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, _2, _3, category] = queryKey;

  const params = {
    category: category,
    page: pageParam ?? 1,
  };

  return await GET<FeedResponseTypes>({
    url: '/api/mypage/scrap/list',
    parameters: params,
  });
};
