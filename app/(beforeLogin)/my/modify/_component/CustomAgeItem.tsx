import cx from 'classnames';
import Heading from '@/app/components/text/Heading';
import Image from 'next/image';

import * as styles from './customAgeItem.css';

type Props = {
  age: number;
  image: string;
  acticeImage: string;

  isSelect?: boolean;
  onClick?: () => void;
};

export default function CustomAgeItem({
  age,
  image,
  acticeImage,
  isSelect,
  onClick,
}: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.item, isSelect && `age${age}`)}
      onClick={onClick}
    >
      <Heading size='2' className={cx(styles.age, isSelect && `age${age}`)}>
        {age}대
      </Heading>
      <Image
        src={isSelect ? acticeImage : image}
        alt='age'
        width={50}
        height={49}
        className={styles.image}
      />
    </div>
  );
}
