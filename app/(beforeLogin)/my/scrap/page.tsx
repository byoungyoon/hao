import SuspenseMyScrap from '@/app/(beforeLogin)/my/scrap/_component/SuspenseMyScrap';
import CustomItemGroup from '@/app/(beforeLogin)/my/scrap/_component/CustomItemGroup';

import * as styles from './page.css';

export default function MyScrapPage() {
  return (
    <section className={styles.section}>
      <SuspenseMyScrap>
        <CustomItemGroup />
      </SuspenseMyScrap>
    </section>
  );
}
