import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedVote } from '@/app/(beforeLogin)/_lib/postFeedVote';
import { MouseEventHandler } from 'react';
import { useHeart } from '@/app/store/useHeart';

type Props = {
  id: number;
  onTrackable?: () => void;
};

export const useFeedVote = ({ id, onTrackable }: Props) => {
  const queryClient = useQueryClient();
  const viewHeart = useHeart((state) => state.viewHeart);

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'vote'],
    mutationFn: postFeedVote,
    onMutate: () => {
      if (onTrackable) onTrackable();
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });
    },
  });

  const onVote: MouseEventHandler<HTMLImageElement> = (event) => {
    viewHeart(event.clientX, event.clientY);

    onAction({ id: id });
  };

  return { onVote };
};
