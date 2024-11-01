'use client';

import { useFeedForm } from '@/app/store/useTranslate';
import FeedList from '@/app/components/template/feedList/FeedList';
import { getFeed } from '@/app/(beforeLogin)/feed/_lib/getFeed';

export default function CustomCardGroup() {
  const { age, category, sort, search } = useFeedForm();

  return (
    <FeedList
      queryKey={['feed', age, category, sort, search]}
      queryFn={getFeed}
      hasTotal={false}
    />
  );
}
