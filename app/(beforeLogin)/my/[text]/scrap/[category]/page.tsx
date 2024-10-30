import CustomText from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_component/CustomText';
import { Suspense } from 'react';
import CustomCardGroup from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_component/CustomCardGroup';
import CustomNext from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_component/CustomNext';
import SuspenseMyScrapFeed from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_component/SuspenseMyScrapFeed';

import * as styles from './page.css';

type Props = {
  params: {
    category: string;
  };
};

export default function MyScrapCategoryPage({ params }: Props) {
  const category = decodeURIComponent(params.category);

  return (
    <section className={styles.section}>
      <SuspenseMyScrapFeed category={category}>
        <Suspense fallback={<>loading...</>}>
          <CustomText category={category} />
        </Suspense>
        <Suspense fallback={<>loading...</>}>
          <CustomCardGroup category={category} />
        </Suspense>
        <Suspense fallback={<>loading...</>}>
          <CustomNext category={category} />
        </Suspense>
      </SuspenseMyScrapFeed>
    </section>
  );
}
