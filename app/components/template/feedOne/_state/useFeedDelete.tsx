import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteFeed } from '@/app/components/template/feedOne/_lib/deleteFeed';
import { useRouter } from 'next/navigation';
import { useModal } from '@/app/store/useModal';
import Image from '@/app/image/character/modal-delete.png';
import TextModal from '@/app/components/modal/TextModal';
import { vars } from '@/app/theme.css';

type Props = {
  id: number;
};

export const useFeedDelete = ({ id }: Props) => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { openModal } = useModal();

  const { mutate } = useMutation({
    mutationKey: ['feed', id, 'delete'],
    mutationFn: deleteFeed,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });

      router.back();
    },
  });

  const onAction = () => {
    mutate({ id: id });
  };

  const onDelete = () => {
    openModal(
      <TextModal
        text={['삭제할래', '한 번 삭제하면 되돌릴 수 없어']}
        image={{
          item: Image.src,
          background: vars.color.purple['100'],
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
