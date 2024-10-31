import { useMutation } from '@tanstack/react-query';
import { postFeedVote } from '@/app/(beforeLogin)/_lib/postFeedVote';
import { MouseEventHandler } from 'react';
import { useHeart } from '@/app/store/useHeart';
import { useClient } from '@/app/store/useClient';

type Props = {
  id: number;

  vote?: {
    state?: boolean;
    trueCount: number;
    falseCount: number;
  };
  onTrackable?: () => void;
};

export const useFeedVote = ({ id, vote }: Props) => {
  const updateVote = useClient((state) => state.updateVote);
  const viewHeart = useHeart((state) => state.viewHeart);

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'vote'],
    mutationFn: postFeedVote,
    onMutate: () => {
      if (vote) updateVote(id, !vote.state, vote.trueCount, vote.falseCount);
    },
  });

  const onVote: MouseEventHandler<HTMLImageElement> = (event) => {
    event.stopPropagation();

    viewHeart(event.clientX, event.clientY);

    onAction({ id: id });
  };

  return { onVote };
};
