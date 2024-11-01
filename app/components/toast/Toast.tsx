import Character from '@/app/image/character/toast.svg';
import Close from '@/app/icon/close-orange.svg';
import Image from 'next/image';
import Body from '@/app/components/text/Body';

import * as styles from './toast.css';

type Props = {
  text: string;
  onClose?: () => void;
};

export default function Toast({ text, onClose }: Props) {
  return (
    <div className={styles.toast}>
      <div className={styles.textLayer}>
        <Image alt='character' src={Character} />
        <Body size='5' className={styles.text}>
          {text}
        </Body>
      </div>
      <Image src={Close} alt='close' onClick={onClose} />
    </div>
  );
}
