import { MutationFunction } from '@tanstack/react-query';
import { PUT } from '@/app/sevice/service';

export type FeedUpdateRequestTypes = {
  id: number;
  subject: string;
  body: string;
  image: File[];
  category: string;
};

export const putFeedUpdate: MutationFunction<
  object,
  FeedUpdateRequestTypes
> = async ({ id, category, subject, image, body }) => {
  const formData = new FormData();

  formData.append('subject', subject);
  formData.append('body', body);
  formData.append('category', category);
  image.forEach((img) => formData.append('image', img));

  return await PUT({
    url: `/api/board/update/${id}`,
    parameters: formData,
    isFormData: true,
  });
};
