import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentVote } from '@/app/components/template/feedOne/_lib/postFeedCommentVote';

type Props = {
  id: number;
};

export const useFeedCommentVote = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'vote'],
    mutationFn: postFeedCommentVote,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });
    },
  });

  const onVote = () => {
    onAction({ id: id });
  };

  return { onVote };
};
