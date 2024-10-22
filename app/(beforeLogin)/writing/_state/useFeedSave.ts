import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postFeedSave } from '@/app/(beforeLogin)/writing/_lib/postFeedSave';
import { useRouter } from 'next/navigation';
import { useWritingForm } from '@/app/store/useTranslate';

type Props = {
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

  const { mutate: onAction } = useMutation({
    mutationKey: ['writing'],
    mutationFn: postFeedSave,
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        predicate: (query) => query.queryKey[0] === 'feed',
      });

      reset();
      router.push('/feed');
    },
  });

  const onResult = (props: Props) => {
    onAction({ ...props });
  };

  return { onResult };
};
