'use client';

import CustomOption from '@/app/(beforeLogin)/writing/_component/CustomOption';
import { useWritingForm } from '@/app/store/useTranslate';
import { useEffect } from 'react';

import * as styles from './customOptionGroup.css';

export default function CustomOptionGroup() {
  const { type, updateType } = useWritingForm();

  const onClickOption = (sType: '후시딘' | '후추') => () => {
    updateType(sType);
  };

  useEffect(() => {
    return () => updateType('후시딘');
  }, [updateType]);

  return (
    <div className={styles.optionLayerGroup}>
      <CustomOption
        mode='후시딘'
        isSelect={type === '후시딘'}
        onClick={onClickOption('후시딘')}
      />
      <CustomOption
        mode='후추'
        isSelect={type === '후추'}
        onClick={onClickOption('후추')}
      />
    </div>
  );
}
