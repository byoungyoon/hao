'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

import * as styles from './virbratingText.css';

type Props = {
  updateKey: number;
  children: ReactNode;
};

export default function VibratingText({ updateKey = 0, children }: Props) {
  const [isVibrating, setIsVibrating] = useState(false);

  useEffect(() => {
    if (updateKey === 0) return;

    setIsVibrating(true);
    setTimeout(() => setIsVibrating(false), 300);
  }, [updateKey]);

  return (
    <motion.div
      animate={isVibrating ? { x: [0, -2, 2, -2, 2, 0] } : { x: 0 }}
      transition={{
        duration: 0.2,
        repeat: isVibrating ? Infinity : 0,
        repeatType: 'loop',
      }}
      className={styles.text}
    >
      {children}
    </motion.div>
  );
}
