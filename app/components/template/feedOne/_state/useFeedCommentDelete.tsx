import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFeedComment } from '@/app/components/template/feedOne/_lib/deleteFeedComment';
import { useModal } from '@/app/store/useModal';
import TextModal from '@/app/components/modal/TextModal';
import Image from '@/app/image/character/modal-comment-delete.png';
import { vars } from '@/app/theme.css';

type Props = {
  id: number;
};

export const useFeedCommentDelete = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const { openModal } = useModal();

  const { mutate } = useMutation({
    mutationKey: ['feed', 'comment', id, 'delete'],
    mutationFn: deleteFeedComment,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });
    },
  });

  const onAction = () => {
    mutate({ id });
  };

  const onDelete = () => {
    openModal(
      <TextModal
        text='삭제 하고싶어?'
        image={{
          item: Image.src,
          background: vars.color.red['100'],
        }}
        result={{
          text: '응 삭제할래!',
          onResult: onAction,
        }}
      />,
    );
  };

  return { onDelete };
};
