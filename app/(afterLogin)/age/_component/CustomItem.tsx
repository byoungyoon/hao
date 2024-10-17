import Image from 'next/image';
import cx from 'classnames';
import Heading from '@/app/components/text/Heading';

import * as styles from './customItem.css';

type Props = {
  age: number;
  image: string;
  activeImage: string;
  className?: string;
  isActive?: boolean;

  onClick?: () => void;
};

export default function CustomItem({
  age,
  image,
  activeImage,
  isActive,
  className,
  onClick,
}: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.item, isActive && className)}
      onClick={onClick}
    >
      <Heading size='2' className={styles.age}>
        {age}대
      </Heading>
      <Image
        src={isActive ? activeImage : image}
        alt='age'
        width={89}
        height={90}
        objectFit='cover'
      />
    </div>
  );
}
