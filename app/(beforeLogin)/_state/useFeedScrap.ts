import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedScrap } from '@/app/(beforeLogin)/_lib/postFeedScrap';
import { useClient } from '@/app/store/useClient';
import { MouseEventHandler } from 'react';
import { useToast } from '@/app/store/useToast';

type Props = {
  id: number;
  state?: boolean;
  category?: string;
};

export const useFeedScrap = ({ id, state, category }: Props) => {
  const queryClient = useQueryClient();
  const { updateScrap, scrap } = useClient();
  const updateToast = useToast((state) => state.updateToast);

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'scrap'],
    mutationFn: postFeedScrap,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['my', 'scrap'],
      });
      await queryClient.invalidateQueries({
        queryKey: ['feed', id],
      });

      if (scrap[id].state) updateToast(`'${category}'에 잘 간직했어`);
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
