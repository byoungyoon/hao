import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentVote } from '@/app/components/template/feedOne/_lib/postFeedCommentVote';

type Props = {
  feedId: number;
  id: number;
};

export const useFeedCommentVote = ({ feedId, id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'vote'],
    mutationFn: postFeedCommentVote,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', feedId, 'comment'],
      });
    },
  });

  const onVote = () => {
    onAction({ id: id });
  };

  return { onVote };
};
