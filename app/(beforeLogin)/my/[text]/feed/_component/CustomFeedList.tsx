'use client';

import FeedList from '@/app/components/template/feedList/FeedList';
import { useFeedForm } from '@/app/store/useTranslate';
import { getMyFeed } from '@/app/(beforeLogin)/my/[text]/_lib/getMyFeed';

export default function CustomFeedList() {
  const { category, isAdopted } = useFeedForm();

  return (
    <FeedList
      queryKey={['feed', 'my', category, isAdopted]}
      queryFn={getMyFeed}
    />
  );
}
