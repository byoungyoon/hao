'use client';

import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { MotionProps, motion } from 'framer-motion';

type Props = {
  y?: number;
};

export default function CustomArticle(
  props: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> &
    MotionProps &
    Props,
) {
  const { children, y = 15, ...rest } = props;

  return (
    <motion.article
      initial={{ y: y, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: y, opacity: 0 }}
      {...rest}
    >
      {children}
    </motion.article>
  );
}
