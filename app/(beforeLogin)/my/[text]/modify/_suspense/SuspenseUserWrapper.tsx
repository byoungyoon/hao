import { ReactNode } from 'react';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { userKey } from '@/app/provider/keyData';

type Props = {
  children: ReactNode;
};

export default async function SuspenseUserWrapper({ children }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(userKey);
  const dehydratedState = dehydrate(queryClient);
  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
