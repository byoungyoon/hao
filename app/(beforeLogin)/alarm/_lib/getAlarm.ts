import { GET } from '@/app/sevice/service';

export type AlarmDataTypes = {
  id: number;
  body: string;
  nickname: string;
  type: 'LIKE' | 'COMMENT' | 'ADOPTED';
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
  pageParams?: number;
  queryKey: [_1: string];
};

export const getAlarm = async ({ pageParams }: Props) => {
  const params = {
    page: pageParams ?? 1,
  };

  return await GET<AlarmResponseTypes>({
    url: '/api/alarm/list',
    parameters: params,
  });
};
