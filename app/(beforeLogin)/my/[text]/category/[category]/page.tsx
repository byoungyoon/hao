'use client';

import FeedList from '@/app/components/template/feedList/FeedList';
import { getMyCategoryFeed } from '@/app/(beforeLogin)/my/[text]/category/[category]/_lib/getMyCategoryFeed';

import * as styles from './page.css';

type Props = {
  params: {
    category: string;
  };
};

export default function MyCategoryPage({ params }: Props) {
  return (
    <section className={styles.section}>
      <FeedList
        queryKey={[
          'my',
          'feed',
          'category',
          decodeURIComponent(params.category),
        ]}
        queryFn={getMyCategoryFeed}
      />
    </section>
  );
}
