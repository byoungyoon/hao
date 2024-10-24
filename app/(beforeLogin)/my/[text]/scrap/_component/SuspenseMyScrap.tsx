import { ReactNode } from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getMyScrap } from '@/app/(beforeLogin)/my/[text]/scrap/_lib/getMyScrap';

type Props = {
  children: ReactNode;
};

export default async function SuspenseMyScrap({ children }: Props) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['my', 'scrap'],
    queryFn: getMyScrap,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
