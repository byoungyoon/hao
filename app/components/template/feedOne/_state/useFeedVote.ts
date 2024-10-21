import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedVote } from '@/app/components/template/feedOne/_lib/postFeedVote';

type Props = {
  id: number;
};

export const useFeedVote = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'vote'],
    mutationFn: postFeedVote,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', id],
      });
    },
  });

  const onVote = () => {
    onAction({ id: id });
  };

  return { onVote };
};
