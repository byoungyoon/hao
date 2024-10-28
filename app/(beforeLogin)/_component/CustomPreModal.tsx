'use client';

import { motion } from 'framer-motion';
import { MOTION_LAYOUT_MODAL } from '@/app/components/modal/Modal';

import * as styles from './customPreModal.css';

export default function CustomPreModal() {
  return (
    <motion.div className={styles.preModal} layoutId={MOTION_LAYOUT_MODAL} />
  );
}
