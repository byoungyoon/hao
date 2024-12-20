'use client';

import Body from '@/app/components/text/Body';
import Image from 'next/image';
import Arrow from '@/app/icon/category-gray.svg';
import { useEffect, useState } from 'react';
import CustomSelect from '@/app/(beforeLogin)/writing/_component/CustomSelect';
import { useWritingForm } from '@/app/store/useTranslate';
import cx from 'classnames';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';

import * as styles from './customCategory.css';

type Props = {
  isQuestion?: boolean;
  isDisabled?: boolean;
};

export default function CustomCategory({ isQuestion, isDisabled }: Props) {
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

  const { localData: todayData } = useToday();

  useEffect(() => {
    if (isQuestion) updateCategory(todayData.category);

    return () => updateCategory('');
  }, [updateCategory]);

  return (
    <>
      <div
        role='button'
        tabIndex={0}
        className={cx(
          styles.category,
          (isQuestion || isDisabled) && 'question',
        )}
        onClick={onClickCategory}
      >
        <Body size='3' className={styles.categoryText}>
          {isQuestion
            ? todayData.category
            : !!category
              ? category
              : '카테고리를 선택해줘'}
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
