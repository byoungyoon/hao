'use client';

import { ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import * as styles from './animationProvider.css';

type Props = {
  children: ReactNode;
};

export default function AnimationProvider({ children }: Props) {
  const pathname = usePathname();
  const lastPathSegment = pathname.split('/').pop(); // Get the last segment of the pathname

  const isLastSegmentNumber = !isNaN(Number(lastPathSegment));

  return (
    <AnimatePresence>
      {isLastSegmentNumber && (
        <motion.div
          key={pathname}
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 50, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={styles.container}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
