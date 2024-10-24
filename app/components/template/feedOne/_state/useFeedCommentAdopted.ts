import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentAdopted } from '@/app/components/template/feedOne/_lib/posFeedCommentAdopted';

type Props = {
  id: number;
};

export const useFeedCommentAdopted = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'adopted'],
    mutationFn: postFeedCommentAdopted,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });
    },
  });

  const onAdopted = () => {
    onAction({ id: id });
  };

  return { onAdopted };
};
