import { Suspense } from 'react';
import FeedOne from '@/app/components/template/feedOne/FeedOne';
import SuspenseFeedOne from '@/app/(beforeLogin)/_suspense/SuspenseFeedOne';

type Props = {
  params: { detail: string };
};

export default function MyScrapCategoryDetailPage({ params }: Props) {
  return (
    <Suspense>
      <SuspenseFeedOne id={+params.detail}>
        <FeedOne id={+params.detail} />
      </SuspenseFeedOne>
    </Suspense>
  );
}
