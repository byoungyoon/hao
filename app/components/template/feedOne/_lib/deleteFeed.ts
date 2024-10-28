import { MutationFunction } from '@tanstack/react-query';
import { DELETE } from '@/app/sevice/service';

export type FeedDeleteRequestTypes = {
  id: number;
};

export const deleteFeed: MutationFunction<
  object,
  FeedDeleteRequestTypes
> = async ({ id }) => {
  return await DELETE({
    url: `/api/board/delete/${id}`,
  });
};
