import Alarm from '@/app/image/character/alarm-no.svg';
import Image from 'next/image';
import Body from '@/app/components/text/Body';

import * as styles from './customNoItem.css';

export default function CustomNoItem() {
  return (
    <div className={styles.container}>
      <Image src={Alarm} alt='alarm' />
      <Body size='2' className={styles.text}>
        새로운 소식이 들려오면 알려줄게!
      </Body>
    </div>
  );
}
