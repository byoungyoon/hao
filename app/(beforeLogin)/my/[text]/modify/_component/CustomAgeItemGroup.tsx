'use client';

import { useAgeForm } from '@/app/store/useTranslate';
import Default10 from '@/app/image/character/default_10.png';
import Default20 from '@/app/image/character/default_20.png';
import Default30 from '@/app/image/character/default_30.png';
import Color10 from '@/app/image/character/color_10.png';
import Color20 from '@/app/image/character/color_20.png';
import Color30 from '@/app/image/character/color_30.png';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useEffect, useState } from 'react';
import CustomAgeItem from '@/app/(beforeLogin)/my/[text]/modify/_component/CustomAgeItem';

export default function CustomAgeItemGroup() {
  const { localData: userData } = useUser();
  const { updateAge } = useAgeForm();

  const [age, setAge] = useState(userData.age);

  const onClickItem = (age: number) => () => {
    setAge(age);
  };

  useEffect(() => {
    updateAge(age);

    return () => updateAge(10);
  }, [age]);

  return (
    <>
      <CustomAgeItem
        age={10}
        image={Default10.src}
        acticeImage={Color10.src}
        isSelect={age === 10}
        onClick={onClickItem(10)}
      />
      <CustomAgeItem
        age={20}
        image={Default20.src}
        acticeImage={Color20.src}
        isSelect={age === 20}
        onClick={onClickItem(20)}
      />
      <CustomAgeItem
        age={30}
        image={Default30.src}
        acticeImage={Color30.src}
        isSelect={age === 30}
        onClick={onClickItem(30)}
      />
    </>
  );
}
