import CustomCardGroup from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_component/CustomCardGroup';

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
      <CustomCardGroup category={category} />
    </section>
  );
}
