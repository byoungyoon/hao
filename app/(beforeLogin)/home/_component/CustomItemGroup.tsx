'use client';

import { useTop5 } from '@/app/(beforeLogin)/home/_state/useTop5';
import CustomItem from '@/app/(beforeLogin)/home/_component/CustomItem';
import { useTop5From } from '@/app/store/useTranslate';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';

import * as styles from './customItemGroup.css';

const variants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 20 : -20,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.2 },
  },
  exit: (direction: number) => ({
    x: direction < 0 ? 20 : -20,
    opacity: 0,
    transition: { duration: 0.2 },
  }),
};

export default function CustomItemGroup() {
  const router = useRouter();
  const pathname = usePathname();

  const { age, direction } = useTop5From();
  const { localData: top5Data, isPending } = useTop5({ age: age });

  const onClickItem = (id: number) => () => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <AnimatePresence custom={direction} mode='wait'>
      <motion.div
        key={age}
        className={styles.itemGroup}
        custom={direction}
        variants={variants}
        initial='enter'
        animate='center'
        exit='exit'
      >
        {top5Data.map((datum, index) => (
          <CustomItem
            id={datum.id}
            key={datum.id}
            num={index + 1}
            image={datum.thumbnail}
            title={datum.subject}
            subTitle={datum.body}
            like={datum.vote}
            comment={datum.commentCnt}
            isLike={datum.isVoted}
            onClick={onClickItem(datum.id)}
          />
        ))}
        {isPending && (
          <>
            <div className={styles.pendingLayer} />
            <div className={styles.pendingLayer} />
            <div className={styles.pendingLayer} />
            <div className={styles.pendingLayer} />
            <div className={styles.pendingLayer} />
          </>
        )}
      </motion.div>
    </AnimatePresence>
  );
}
