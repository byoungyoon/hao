import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedScrapRequestTypes = {
  id: number;
};

export const postFeedScrap: MutationFunction<
  object,
  FeedScrapRequestTypes
> = async ({ id }) => {
  return await POST({
    url: `/api/scrap/${id}`,
  });
};
