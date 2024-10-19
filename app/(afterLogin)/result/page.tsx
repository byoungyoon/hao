import Onboarding from '@/app/image/onboarding.png';
import Heading from '@/app/components/text/Heading';
import Image from 'next/image';
import CustomButton from '@/app/(afterLogin)/result/_component/CustomButton';

import * as styles from './page.css';

export default function ResultPage() {
  return (
    <section className={styles.section}>
      <Heading size='1' className={styles.title}>
        오늘의 후회는 <strong>내일의 발전한 나로</strong> 만들어줄 거야!
      </Heading>
      <div className={styles.imageLayer}>
        <Image
          src={Onboarding.src}
          alt='onboarding'
          layout='fill'
          objectFit='cover'
        />
      </div>
      <div className={styles.buttonLayer}>
        <CustomButton />
      </div>
    </section>
  );
}
