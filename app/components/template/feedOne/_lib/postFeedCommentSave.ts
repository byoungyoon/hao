import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedCommentSaveRequestTypes = {
  id: number;
  body: string;
};

export const postFeedCommentSave: MutationFunction<
  object,
  FeedCommentSaveRequestTypes
> = async ({ id, body }) => {
  const formData = new FormData();

  formData.append('boardid', `${id}`);
  formData.append('body', body);

  return await POST({
    url: '/api/comment/save',
    parameters: formData,
    isFormData: true,
  });
};
