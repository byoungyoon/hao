import CustomTab from '@/app/(beforeLogin)/feed/_component/CustomTab';
import CustomChipGroup from '@/app/(beforeLogin)/_component/CustomChipGroup';
import CustomSelect from '@/app/(beforeLogin)/feed/_component/CustomSelect';
import CustomCardGroup from '@/app/(beforeLogin)/feed/_component/CustomCardGroup';
import CustomInput from '@/app/(beforeLogin)/feed/_component/CustomInput';

import * as styles from './page.css';

export default function FeedPage() {
  return (
    <section className={styles.section}>
      <CustomTab />
      <article className={styles.listArticle}>
        <CustomChipGroup />
        <div className={styles.selectLayer}>
          <CustomInput />
          <CustomSelect />
        </div>
        <CustomCardGroup />
      </article>
    </section>
  );
}
