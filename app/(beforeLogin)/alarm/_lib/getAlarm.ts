import { QueryFunction } from '@tanstack/react-query';
import { GET } from '@/app/sevice/service';

export type AlarmResponseTypes = {
  boardId: number;
  commentId: number;
  isAlive: boolean;
  nickname: string;
  comment: string;
  image: string;
};

export const getAlarm: QueryFunction<
  AlarmResponseTypes[],
  [_1: string]
> = async () => {
  return await GET<AlarmResponseTypes[]>({
    url: '/api/alarm/list',
  });
};
