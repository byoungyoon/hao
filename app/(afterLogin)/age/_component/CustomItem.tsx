import Image from 'next/image';
import * as styles from './customItem.css';

type Props = {
  age: number;
  image: string;

  activeImage: string;
  activeColor: string;
  isActive?: boolean;
};

export default function CustomItem({
  age,
  image,
  activeImage,
  activeColor,
  isActive,
}: Props) {
  return (
    <div className={styles.item}>
      <p>{age}</p>
      <Image src={isActive ? activeImage : image} alt='age' />
    </div>
  );
}
