import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedVoteRequestTypes = {
  id: number;
};

export const postFeedVote: MutationFunction<
  object,
  FeedVoteRequestTypes
> = async ({ id }) => {
  return await POST({
    url: `/api/vote/board/${id}`,
  });
};
