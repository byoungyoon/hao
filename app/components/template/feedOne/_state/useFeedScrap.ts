import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedScrap } from '@/app/components/template/feedOne/_lib/postFeedScrap';

type Props = {
  id: number;
};

export const useFeedScrap = ({ id }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction } = useMutation({
    mutationKey: ['feed', id, 'scrap'],
    mutationFn: postFeedScrap,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });
      await queryClient.invalidateQueries({
        queryKey: ['my', 'scrap'],
      });
    },
  });

  const onScrap = () => {
    onAction({ id: id });
  };

  return { onScrap };
};
