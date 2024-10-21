import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFeedComment } from '@/app/components/template/feedOne/_lib/deleteFeedComment';

type Props = {
  feedId: number;
  id: number;
};

export const useFeedCommentDelete = ({ feedId, id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', 'comment', id, 'delete'],
    mutationFn: deleteFeedComment,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', feedId, 'comment'],
      });
    },
  });

  const onDelete = () => {
    onAction({ id: id });
  };

  return { onDelete };
};
