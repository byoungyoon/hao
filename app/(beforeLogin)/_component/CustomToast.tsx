'use client';

import Toast from '@/app/components/toast/Toast';
import { useToast } from '@/app/store/useToast';
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';

import * as styles from './customToast.css';

type Props = {
  timeout?: number;
  bottom?: number;
};

const variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function CustomToast({ timeout = 3000, bottom = 62 }: Props) {
  const { open, text, closeToast } = useToast();

  useEffect(() => {
    if (open)
      setTimeout(() => {
        closeToast();
      }, timeout!);
  }, [open, timeout]);

  return (
    <div className={styles.toast} style={{ bottom: bottom }}>
      <AnimatePresence>
        {open && (
          <motion.div
            variants={variants}
            initial='initial'
            animate='animate'
            exit='exit'
          >
            <Toast text={text} onClose={closeToast} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
