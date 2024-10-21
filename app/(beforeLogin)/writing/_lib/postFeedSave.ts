import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedSaveRequestTypes = {
  subject: string;
  body: string;
  image: File[];
  age: number;
  category: string;
  type: string;
  isQuestion: boolean;
};

export const postFeedSave: MutationFunction<
  object,
  FeedSaveRequestTypes
> = async ({ subject, body, image, age, category, type, isQuestion }) => {
  const formData = new FormData();

  formData.append('subject', subject);
  formData.append('body', body);
  formData.append('age', `${age}`);
  formData.append('category', category);
  formData.append('type', type);
  formData.append('isQuestion', `${isQuestion}`);
  image.forEach((img) => formData.append('image', img));

  return await POST({
    url: '/api/board/save',
    parameters: formData,
  });
};
