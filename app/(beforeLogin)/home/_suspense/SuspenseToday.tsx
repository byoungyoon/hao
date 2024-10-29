import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { todayKey } from '@/app/provider/keyData';
import CustomQuestion from '@/app/(beforeLogin)/home/_component/CustomQuestion';

export default async function SuspenseToday() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(todayKey);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CustomQuestion />
    </HydrationBoundary>
  );
}
