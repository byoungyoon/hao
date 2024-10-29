import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { getTop5 } from '@/app/(beforeLogin)/home/_lib/getTop5';
import CustomItemGroup from '@/app/(beforeLogin)/home/_component/CustomItemGroup';

export default async function SuspenseTopFeed() {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['top5', 0],
    queryFn: getTop5,
  });

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CustomItemGroup />
    </HydrationBoundary>
  );
}
