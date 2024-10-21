import CustomChipGroup from '@/app/(beforeLogin)/_component/CustomChipGroup';
import CustomCardGroup from '@/app/(beforeLogin)/my/feed/_component/CustomCardGroup';
import CustomTab from '@/app/(beforeLogin)/my/feed/_component/CustomTab';
import CustomNext from '@/app/(beforeLogin)/my/feed/_component/CustomNext';

import * as styles from './page.css';

export default function MyFeedPage() {
  return (
    <section className={styles.section}>
      <div className={styles.tabLayer}>
        <CustomTab />
      </div>
      <article className={styles.article}>
        <div className={styles.chipGroupLayer}>
          <CustomChipGroup />
        </div>
        <div className={styles.feedGroupLayer}>
          <CustomCardGroup />
        </div>
        <CustomNext />
      </article>
    </section>
  );
}
