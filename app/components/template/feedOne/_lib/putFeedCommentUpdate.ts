import { MutationFunction } from '@tanstack/react-query';
import { PUT } from '@/app/sevice/service';

export type FeedCommentUpdateRequestTypes = {
  id: number;
  body: string;
};

export const putFeedCommentUpdate: MutationFunction<
  object,
  FeedCommentUpdateRequestTypes
> = async ({ id, body }) => {
  const params = {
    body: body,
  };

  return await PUT({
    url: `/api/comment/update/${id}`,
    parameters: params,
  });
};
