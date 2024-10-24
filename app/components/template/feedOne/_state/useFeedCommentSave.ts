import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedCommentSave } from '@/app/components/template/feedOne/_lib/postFeedCommentSave';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { throttle } from 'lodash';

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

      await queryClient.invalidateQueries({
        queryKey: ['feed', id],
      });

      if (onReset) onReset();
    },
  });

  const throttledAction = throttle(onAction, 3000);

  const onResult = (body: string) => {
    throttledAction({
      id: id,
      nickname: userData.nickname,
      age: userData.age,
      body: body,
    });
  };

  return { onResult, isPending };
};
