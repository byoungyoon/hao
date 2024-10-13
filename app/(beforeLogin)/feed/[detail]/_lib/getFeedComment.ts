import { GET } from '@/app/sevice/service';

export type FeedCommentDataTypes = {
  boardId: number;
  userId: string;
  id: number;
  nickname: string;
  body: string;
  age: number;
  vote: number;
  isWriter: boolean;
  isAdopted: boolean;
  createdAt: string;
  img: string;
  isVoted: boolean;
};

export type FeedCommentResponseTypes = {
  hasPage: boolean;
  data: FeedCommentDataTypes[];
};

type Props = {
  pageParams?: number;
  queryKey: [_1: string, detail: number, _3: string];
};

export const getFeedComment = async ({ queryKey, pageParam }: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_1, detail, _3] = queryKey;

  const params = {
    page: pageParam,
  };

  return await GET<FeedCommentResponseTypes>({
    url: `/api/comment/list/${detail}`,
    parameters: params,
  });
};
