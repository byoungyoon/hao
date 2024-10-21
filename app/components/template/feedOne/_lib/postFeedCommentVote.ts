import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedCommentVoteRequestTypes = {
  id: number;
};

export const postFeedCommentVote: MutationFunction<
  object,
  FeedCommentVoteRequestTypes
> = async ({ id }) => {
  return await POST({
    url: `/api/vote/comment/${id}`,
  });
};
