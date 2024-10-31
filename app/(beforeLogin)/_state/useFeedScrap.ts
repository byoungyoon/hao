import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedScrap } from '@/app/(beforeLogin)/_lib/postFeedScrap';
import { useClient } from '@/app/store/useClient';
import { MouseEventHandler } from 'react';

type Props = {
  id: number;
  state?: boolean;
};

export const useFeedScrap = ({ id, state }: Props) => {
  const queryClient = useQueryClient();
  const { updateScrap } = useClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'scrap'],
    mutationFn: postFeedScrap,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['my', 'scrap'],
      });
    },
    onMutate: () => {
      updateScrap(id, !state);
    },
  });

  const onScrap: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();

    onAction({ id: id });
  };

  return { onScrap };
};
