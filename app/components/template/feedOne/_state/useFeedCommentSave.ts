import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentSave } from '@/app/components/template/feedOne/_lib/postFeedCommentSave';

type Props = {
  id: number;

  onReset?: () => void;
};

export const useFeedCommentSave = ({ id, onReset }: Props) => {
  const queryClient = useQueryClient();

  const { mutate: onAction, isPending } = useMutation({
    mutationKey: ['feed', 'comment', id, 'save'],
    mutationFn: postFeedCommentSave,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', id, 'comment'],
      });

      await queryClient.invalidateQueries({
        queryKey: ['feed', id],
      });

      if (onReset) onReset();
    },
  });

  const onResult = (body: string) => {
    onAction({
      id: id,
      body: body,
    });
  };

  return { onResult, isPending };
};
