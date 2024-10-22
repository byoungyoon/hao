import { MutationFunction } from '@tanstack/react-query';
import { POST } from '@/app/sevice/service';

export type FeedCommentSaveRequestTypes = {
  id: number;
  nickname: string;
  age: number;
  body: string;
};

export const postFeedCommentSave: MutationFunction<
  object,
  FeedCommentSaveRequestTypes
> = async ({ id, nickname, age, body }) => {
  const params = {
    boardId: id,
    nickname: nickname,
    age: age,
    body: body,
  };

  return await POST({
    url: '/api/comment/save',
    parameters: params,
  });
};
