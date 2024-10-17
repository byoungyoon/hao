import Heading from '@/app/components/text/Heading';
import Body from '@/app/components/text/Body';
import CustomItemGroup from '@/app/(afterLogin)/age/_component/CustomItemGroup';
import CustomResult from '@/app/(afterLogin)/age/_component/CustomResult';

import * as styles from './page.css';

export default function AgePage() {
  return (
    <section className={styles.section}>
      <Heading size='1'>나의 연령대는?</Heading>
      <Body size='3' className={styles.subTitle}>
        주변 친구들의 후회를 먼저 보여줄게!
      </Body>
      <CustomItemGroup />
      <div className={styles.buttonLayer}>
        <CustomResult />
      </div>
    </section>
  );
}
