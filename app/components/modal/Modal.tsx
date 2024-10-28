'use client';

import { MouseEventHandler, useCallback, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { useModal } from '@/app/store/useModal';
import { motion } from 'framer-motion';

import * as styles from './modal.css';

export const MOTION_LAYOUT_MODAL = 'layout';

const overlayVariants = {
  initial: { backgroundColor: 'rgba(0, 0, 0, 0)' },
  animate: { backgroundColor: 'rgba(0, 0, 0, 0.5)' },
  exit: { backgroundColor: 'rgba(0, 0, 0, 0)' },
};

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function Modal() {
  const { open, children, closeModal } = useModal();

  const onClickOverlay = useCallback(() => {
    closeModal();
  }, [closeModal]);

  const onClickBox: MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation();
  };

  useEffect(() => {
    if (open) window.addEventListener('popstate', onClickOverlay);

    return () => window.removeEventListener('popstate', onClickOverlay);
  }, [open, closeModal]);

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
            layoutId={MOTION_LAYOUT_MODAL}
            className={styles.box}
            variants={contentVariants}
            initial='initial'
            animate='animate'
            exit='exit'
            onClick={onClickBox}
            transition={{
              type: 'spring',
              damping: 10,
              stiffness: 80,
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
