import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteAlarm } from '@/app/(beforeLogin)/alarm/_lib/deleteAlarm';

type Props = {
  id: number;
};

export const useAlarmDelete = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['alarm', 'delete', id],
    mutationFn: deleteAlarm,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['alarm'],
      });
    },
  });

  const onDelete = () => {
    onAction({ id: id });
  };

  return { onDelete };
};
