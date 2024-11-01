import FeedOne from '@/app/components/template/feedOne/FeedOne';
import { Suspense } from 'react';
import SuspenseFeedOne from '@/app/(beforeLogin)/_suspense/SuspenseFeedOne';

type Props = {
  params: { detail: string };
};

export default function MyFeedDetailPage({ params }: Props) {
  return (
    <Suspense>
      <SuspenseFeedOne id={+params.detail}>
        <FeedOne id={+params.detail} />
      </SuspenseFeedOne>
    </Suspense>
  );
}
