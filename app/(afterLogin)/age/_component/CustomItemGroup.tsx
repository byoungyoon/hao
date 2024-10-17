'use client';

import CustomItem from '@/app/(afterLogin)/age/_component/CustomItem';
import default10 from '@/app/image/character/default_10.png';
import color10 from '@/app/image/character/color_10.png';
import default20 from '@/app/image/character/default_20.png';
import color20 from '@/app/image/character/color_20.png';
import default30 from '@/app/image/character/default_30.png';
import color30 from '@/app/image/character/color_30.png';
import { useAgeForm } from '@/app/store/useTranslate';

import * as styles from './customItemGroup.css';

export default function CustomItemGroup() {
  const { age, updateAge } = useAgeForm();

  const onClickItem = (age: number) => () => {
    updateAge(age);
  };

  return (
    <div className={styles.ageGroup}>
      <CustomItem
        image={default10.src}
        activeImage={color10.src}
        age={10}
        className={styles.age10}
        isActive={age === 10}
        onClick={onClickItem(10)}
      />
      <CustomItem
        image={default20.src}
        activeImage={color20.src}
        age={20}
        className={styles.age20}
        isActive={age === 20}
        onClick={onClickItem(20)}
      />
      <CustomItem
        image={default30.src}
        activeImage={color30.src}
        age={30}
        className={styles.age30}
        isActive={age === 30}
        onClick={onClickItem(30)}
      />
    </div>
  );
}
