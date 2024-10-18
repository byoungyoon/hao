import CustomTab from '@/app/(beforeLogin)/feed/_component/CustomTab';
import CustomChipGroup from '@/app/(beforeLogin)/feed/_component/CustomChipGroup';
import CustomSelect from '@/app/(beforeLogin)/feed/_component/CustomSelect';
import CustomNext from '@/app/(beforeLogin)/feed/_component/CustomNext';
import CustomCardGroup from '@/app/(beforeLogin)/feed/_component/CustomCardGroup';

import * as styles from './page.css';

export default function FeedPage() {
  return (
    <section className={styles.section}>
      <CustomTab />
      <article className={styles.listArticle}>
        <CustomChipGroup />
        <div className={styles.selectLayer}>
          <CustomSelect />
        </div>
        <div className={styles.itemGroup}>
          <CustomCardGroup />
          <CustomNext />
        </div>
      </article>
    </section>
  );
}
