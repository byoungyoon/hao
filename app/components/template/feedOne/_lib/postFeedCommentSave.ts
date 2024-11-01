import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedCommentSaveRequestTypes = {
  id: number;
  targetId: number;
  body: string;
  image?: File;
};

export const postFeedCommentSave: MutationFunction<
  object,
  FeedCommentSaveRequestTypes
> = async ({ id, targetId, body, image }) => {
  const formData = new FormData();

  if (targetId !== 0) formData.append('id', `${targetId}`);
  formData.append('boardId', `${id}`);
  formData.append('body', body);
  if (image) formData.append('image', image);

  return await POST({
    url: '/api/comment/save',
    parameters: formData,
    isFormData: true,
  });
};
