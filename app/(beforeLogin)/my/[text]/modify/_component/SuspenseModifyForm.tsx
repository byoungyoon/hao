import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';
import { pointKey, userKey } from '@/app/provider/keyData';

type Props = {
  children: ReactNode;
};

export default async function SuspenseModifyForm({ children }: Props) {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(userKey);
  await queryClient.prefetchQuery(pointKey);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}
