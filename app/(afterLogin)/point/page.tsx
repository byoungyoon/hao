import Heading from '@/app/components/text/Heading';
import SuspensePoint from '@/app/(afterLogin)/point/_component/SuspensePoint';
import CustomItemGroup from '@/app/(afterLogin)/point/_component/CustomItemGroup';
import Body from '@/app/components/text/Body';
import CustomInput from '@/app/(afterLogin)/point/_component/CustomInput';
import CustomButton from '@/app/(afterLogin)/point/_component/CustomButton';

import * as styles from './page.css';

export default function PointPage() {
  return (
    <section>
      <Heading size='1' className={styles.title}>
        나를 설정해봐!
      </Heading>
      <SuspensePoint>
        <CustomItemGroup />
      </SuspensePoint>
      <div className={styles.nameLayer}>
        <Body size='1' className={styles.nameTitle}>
          내 이름은
        </Body>
        <CustomInput />
        <div className={styles.buttonLayer}>
          <CustomButton />
        </div>
      </div>
    </section>
  );
}
