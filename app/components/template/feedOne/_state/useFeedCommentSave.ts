import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentSave } from '@/app/components/template/feedOne/_lib/postFeedCommentSave';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';

type Props = {
  id: number;

  onReset?: () => void;
};

export const useFeedCommentSave = ({ id, onReset }: Props) => {
  const queryClient = useQueryClient();
  const { localData: userData } = useUser();

  const { mutate: onAction, isPending } = useMutation({
    mutationKey: ['feed', 'comment', id, 'save'],
    mutationFn: postFeedCommentSave,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: ['feed', id, 'comment'],
      });

      if (onReset) onReset();
    },
  });

  const onResult = (body: string) => {
    onAction({
      id: id,
      nickname: userData.nickname,
      age: userData.age,
      body: body,
    });
  };

  return { onResult, isPending };
};
