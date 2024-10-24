import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedVote } from '@/app/components/template/feedOne/_lib/postFeedVote';

type Props = {
  id: number;
  onTrackable?: () => void;
};

export const useFeedVote = ({ id, onTrackable }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'vote'],
    mutationFn: postFeedVote,
    onMutate: () => {
      if (onTrackable) onTrackable();
    },
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
