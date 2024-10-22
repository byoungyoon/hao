'use client';

import { useTop5 } from '@/app/(beforeLogin)/home/_state/useTop5';
import CustomItem from '@/app/(beforeLogin)/home/_component/CustomItem';
import { useTop5From } from '@/app/store/useTranslate';
import { usePathname, useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

import * as styles from './customItemGroup.css';

const contentVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

export default function CustomItemGroup() {
  const router = useRouter();
  const pathname = usePathname();

  const age = useTop5From((state) => state.age);
  const { localData: top5Data, isPending } = useTop5({ age: age });

  const onClickItem = (id: number) => () => {
    router.push(`${pathname}/${id}`);
  };

  return (
    <motion.div
      key={age}
      className={styles.itemGroup}
      variants={contentVariants}
      initial='initial'
      animate='animate'
      exit='exit'
    >
      {top5Data.map((datum, index) => (
        <CustomItem
          key={index}
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
  );
}
