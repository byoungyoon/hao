import Heading from '@/app/components/text/Heading';
import Body from '@/app/components/text/Body';
import color10 from '@/app/image/character/color_10.png';
import color20 from '@/app/image/character/color_20.png';
import color30 from '@/app/image/character/color_30.png';
import default10 from '@/app/image/character/default_10.png';
import default20 from '@/app/image/character/default_20.png';
import default30 from '@/app/image/character/default_30.png';

import * as styles from './page.css';

export default function AgePage() {
  return (
    <section className={styles.section}>
      <Heading size='1' className={styles.title}>
        나의 연령대는?
      </Heading>
      <Body size='3' className={styles.subTitle}>
        주변 친구들의 후회를 먼저 보여줄게!
      </Body>
      <div></div>
    </section>
  );
}
