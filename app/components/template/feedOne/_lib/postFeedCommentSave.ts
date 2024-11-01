import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedCommentSaveRequestTypes = {
  id: number;
  body: string;
  image?: File;
};

export const postFeedCommentSave: MutationFunction<
  object,
  FeedCommentSaveRequestTypes
> = async ({ id, body, image }) => {
  const formData = new FormData();

  formData.append('boardId', `${id}`);
  formData.append('body', body);
  if (image) formData.append('image', image);

  return await POST({
    url: '/api/comment/save',
    parameters: formData,
    isFormData: true,
  });
};
