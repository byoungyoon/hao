import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFeedComment } from '@/app/components/template/feedOne/_lib/deleteFeedComment';

type Props = {
  id: number;
};

export const useFeedCommentDelete = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'delete'],
    mutationFn: deleteFeedComment,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });
    },
  });

  const onDelete = () => {
    onAction({ id: id });
  };

  return { onDelete };
};
