import { useMutation, useQueryClient } from '@tanstack/react-query';
import { putAlarm } from '@/app/(beforeLogin)/alarm/_lib/putAlarm';

type Props = {
  id: number;
};

export const useAlarmSelect = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['alarm', id],
    mutationFn: putAlarm,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['alarm'],
      });
    },
  });

  const onSelect = () => {
    onAction({ id });
  };

  return { onSelect };
};
