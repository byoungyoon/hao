'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MouseEventHandler, useEffect, useRef } from 'react';

import * as styles from './customSelect.css';
import Body from '@/app/components/text/Body';
import { useCategory } from '@/app/(beforeLogin)/_state/useCategory';

const overlayVariants = {
  initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  animate: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

const contantVariants = {
  initial: { bottom: '0', y: '100%' },
  animate: { y: '0' },
  exit: { bottom: '0', y: '100%' },
};

type Props = {
  open: boolean;
  onTrackable?: (open: boolean) => void;

  onTrackableCategory?: (category: string) => void;
};

export default function CustomSelect({
  open,
  onTrackable,
  onTrackableCategory,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const onClickOverlay: MouseEventHandler<HTMLDivElement> = (event) => {
    if (ref.current?.contains(event.target as Node)) return;

    if (onTrackable) onTrackable(false);
  };

  const onClickItem = (category: string) => () => {
    if (onTrackableCategory) onTrackableCategory(category);
  };

  const { localData: categoryData } = useCategory();

  useEffect(() => {
    const onPopState = () => {
      if (onTrackable) onTrackable(false);
    };

    if (open) {
      window.history.pushState(null, '', window.location.href);
      window.addEventListener('popstate', onPopState);
    }

    return () => window.removeEventListener('popstate', onPopState);
  }, [open]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.overlay}
          variants={overlayVariants}
          initial='initial'
          animate='animate'
          exit='exit'
          onClick={onClickOverlay}
        >
          <motion.div
            className={styles.wrapper}
            variants={contantVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            transition={{ duration: 0.2, type: 'tween' }}
          >
            <div ref={ref} className={styles.content}>
              <div className={styles.layer}>
                <Body size='1' className={styles.title}>
                  카테고리를 선택해줘
                </Body>
                <div className={styles.categoryGroup}>
                  <div className={styles.categoryGroupOverflow}>
                    {categoryData.map((datum) => (
                      <div
                        key={datum.name}
                        role='button'
                        tabIndex={0}
                        className={styles.item}
                        onClick={onClickItem(datum.name)}
                      >
                        <Body size='2'>{datum.name}</Body>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
