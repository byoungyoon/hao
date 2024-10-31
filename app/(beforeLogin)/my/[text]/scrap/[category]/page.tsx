import CustomText from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_component/CustomText';
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
        <CustomText category={category} />
        <CustomCardGroup category={category} />
        <CustomNext category={category} />
      </SuspenseMyScrapFeed>
    </section>
  );
}
