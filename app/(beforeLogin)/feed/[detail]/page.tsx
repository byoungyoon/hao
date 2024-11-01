import { Suspense, useMemo } from 'react';

import FeedOne from '@/app/components/template/feedOne/FeedOne';
import SuspenseFeedOne from '@/app/(beforeLogin)/_suspense/SuspenseFeedOne';

type Props = {
  params: { detail: string };
};

export default function FeedDetailPage({ params }: Props) {
  const id = useMemo(() => +params.detail, [params.detail]);

  return (
    <Suspense>
      <SuspenseFeedOne id={id}>
        <FeedOne id={id} />
      </SuspenseFeedOne>
    </Suspense>
  );
}
