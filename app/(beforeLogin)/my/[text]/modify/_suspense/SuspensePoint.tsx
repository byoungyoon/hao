import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { pointKey } from '@/app/provider/keyData';
import CustomPointCardGroup from '@/app/(beforeLogin)/my/[text]/modify/_component/CustomPointCardGroup';

export default async function SuspensePoint() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(pointKey);

  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <CustomPointCardGroup />
    </HydrationBoundary>
  );
}
