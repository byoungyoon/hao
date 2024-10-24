import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedCommentScrapRequestTypes = {
  id: number;
};

export const postFeedCommentAdopted: MutationFunction<
  object,
  FeedCommentScrapRequestTypes
> = async ({ id }) => {
  return await POST({
    url: `/api/adopted/${id}`,
  });
};
