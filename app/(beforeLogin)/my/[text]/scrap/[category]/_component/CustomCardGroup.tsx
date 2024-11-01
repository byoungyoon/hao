'use client';

import FeedList from '@/app/components/template/feedList/FeedList';
import { getMyScrapFeed } from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_lib/getMyScrapFeed';

type Props = {
  category: string;
};

export default function CustomCardGroup({ category }: Props) {
  return (
    <FeedList
      queryKey={['feed', 'my', 'scrap', category]}
      queryFn={getMyScrapFeed}
      hasTotal={false}
    />
  );
}
