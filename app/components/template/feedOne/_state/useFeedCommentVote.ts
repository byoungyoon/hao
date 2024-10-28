import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentVote } from '@/app/components/template/feedOne/_lib/postFeedCommentVote';
import { useHeart } from '@/app/store/useHeart';
import { MouseEventHandler } from 'react';

type Props = {
  id: number;
};

export const useFeedCommentVote = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const viewHeart = useHeart((state) => state.viewHeart);

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'vote'],
    mutationFn: postFeedCommentVote,
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
