import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentAdopted } from '@/app/components/template/feedOne/_lib/posFeedCommentAdopted';

type Props = {
  id: number;
  feedId: number;
};

export const useFeedCommentAdopted = ({ id, feedId }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'adopted'],
    mutationFn: postFeedCommentAdopted,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', feedId, 'comment'],
      });
    },
  });

  const onAdopted = () => {
    onAction({ id: id });
  };

  return { onAdopted };
};
