'use client';

import Body from '@/app/components/text/Body';
import Image from 'next/image';
import Arrow from '@/app/icon/category-gray.png';
import { useState } from 'react';
import CustomSelect from '@/app/(beforeLogin)/writing/_component/CustomSelect';
import { useWritingForm } from '@/app/store/useTranslate';

import * as styles from './customCategory.css';

export default function CustomCategory() {
  const { category, updateCategory } = useWritingForm();
  const [open, setOpen] = useState(false);

  const onClickCategory = () => {
    setOpen(true);
  };

  const onTrackable = () => {
    setOpen(false);
  };

  const onTrackableCategory = (category: string) => {
    updateCategory(category);
    setOpen(false);
  };

  return (
    <>
      <div
        role='button'
        tabIndex={0}
        className={styles.category}
        onClick={onClickCategory}
      >
        <Body size='3' className={styles.categoryText}>
          {!!category ? category : '카테고리를 선택해줘'}
        </Body>
        <Image src={Arrow.src} alt='arrow' width={24} height={24} />
      </div>
      <CustomSelect
        open={open}
        onTrackable={onTrackable}
        onTrackableCategory={onTrackableCategory}
      />
    </>
  );
}
