import CustomChipGroup from '@/app/(beforeLogin)/_component/CustomChipGroup';
import CustomTab from '@/app/(beforeLogin)/my/[text]/feed/_component/CustomTab';
import CustomCardGroup from '@/app/(beforeLogin)/my/[text]/feed/_component/CustomCardGroup';
import CustomNext from '@/app/(beforeLogin)/my/[text]/feed/_component/CustomNext';

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
