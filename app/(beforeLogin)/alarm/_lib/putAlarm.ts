import { MutationFunction } from '@tanstack/react-query';
import { PUT } from '@/app/sevice/service';

export type AlarmClickRequest = {
  id: number;
};

export const putAlarm: MutationFunction<object, AlarmClickRequest> = async ({
  id,
}) => {
  return await PUT({
    url: `/api/alarm/click/${id}`,
  });
};
