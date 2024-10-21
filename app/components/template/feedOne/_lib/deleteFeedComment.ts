import { MutationFunction } from '@tanstack/react-query';
import { DELETE } from '@/app/sevice/service';

export type FeedCommentDeleteRequestTypes = {
  id: number;
};

export const deleteFeedComment: MutationFunction<
  object,
  FeedCommentDeleteRequestTypes
> = async ({ id }) => {
  return await DELETE({
    url: `/api/comment/delete/${id}`,
  });
};
