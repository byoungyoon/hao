import Plus from '@/app/icon/plus-gray.png';
import Image from 'next/image';
import Button from '@/app/components/button/Button';

import * as styles from './customCommentInput.css';

export default function CustomCommentInput() {
  return (
    <div className={styles.group}>
      <Image src={Plus} alt='plus' width={40} height={40} />
      <div className={styles.inputLayer}>
        <input
          className={styles.input}
          placeholder='경험을 공유하며 힘이 되는 말을 해봐!'
        />
        <Button
          size='auto'
          color='gray'
          text='전송'
          className={styles.button}
        />
      </div>
    </div>
  );
}
