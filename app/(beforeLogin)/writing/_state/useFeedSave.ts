import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedSave } from '@/app/(beforeLogin)/writing/_lib/postFeedSave';
import { useRouter } from 'next/navigation';
import { useWritingForm } from '@/app/store/useTranslate';
import { useToast } from '@/app/store/useToast';

type Props = {
  id: number;
  subject: string;
  body: string;
  image: File[];
  age: number;
  category: string;
  type: string;
  isQuestion: boolean;
};

export const useFeedSave = () => {
  const queryClient = useQueryClient();
  const router = useRouter();
  const { reset } = useWritingForm();
  const updateToast = useToast((state) => state.updateToast);

  const { mutate: onAction, isPending } = useMutation({
    mutationKey: ['writing'],
    mutationFn: postFeedSave,
    onSuccess: async ({ id }) => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });

      reset();
      updateToast(id ? '변신 완료' : '공유 완료!');

      router.push('/feed');
    },
  });

  const onResult = (props: Props) => {
    onAction({ ...props });
  };

  return { onResult, isPending };
};
