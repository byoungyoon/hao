import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import CustomCategory from '@/app/(beforeLogin)/writing/_component/CustomCategory';
import { categoryKey, todayKey } from '@/app/provider/keyData';

export default async function SuspenseCategory() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(categoryKey);
  await queryClient.prefetchQuery(todayKey);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CustomCategory />
    </HydrationBoundary>
  );
}
