import { GET } from '@/app/sevice/service';

export type AlarmDataTypes = {
  id: number;
  body: string;
  nickname: string;
  msg: 'LIKE' | 'COMMENT' | 'ADOPTED';
  image: string;
  isAlive: boolean;
  age: number;
  page: number;
};

export type AlarmResponseTypes = {
  hasPage: boolean;
  data: AlarmDataTypes[];
};

type Props = {
  pageParam?: number;
  queryKey: [_1: string];
};

export const getAlarm = async ({ pageParam }: Props) => {
  const params = {
    page: pageParam ?? 1,
  };

  return await GET<AlarmResponseTypes>({
    url: '/api/alarm/list',
    parameters: params,
  });
};