import { MutationFunction } from '@tanstack/react-query';
import { DELETE } from '@/app/sevice/service';

export type AlarmDeleteRequestTypes = {
  id: number;
};

export const deleteAlarm: MutationFunction<
  object,
  AlarmDeleteRequestTypes
> = async ({ id }) => {
  return await DELETE({
    url: `/api/alarm/delete/${id}`,
  });
};
