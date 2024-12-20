import CustomItemGroup from '@/app/(beforeLogin)/alarm/_component/CustomItemGroup';
import CustomTotal from '@/app/(beforeLogin)/alarm/_component/CustomTotal';
import CustomToast from '@/app/(beforeLogin)/_component/CustomToast';

import * as styles from './page.css';

export default function AlarmPage() {
  return (
    <section className={styles.section}>
      <CustomTotal />
      <div className={styles.group}>
        <CustomItemGroup />
      </div>
      <CustomToast bottom={20} />
    </section>
  );
}
