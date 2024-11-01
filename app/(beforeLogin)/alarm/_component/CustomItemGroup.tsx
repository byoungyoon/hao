'use client';

import { useAlarm } from '@/app/(beforeLogin)/_state/useAlarm';
import CustomItem from '@/app/(beforeLogin)/alarm/_component/CustomItem';
import CustomNoItem from '@/app/(beforeLogin)/alarm/_component/CustomNoItem';
import { AnimatePresence } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

export default function CustomItemGroup() {
  const divRef = useRef<HTMLDivElement | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement | null) => {
    ref(node!);
    divRef.current = node;
  };

  const { localData: alarmData, fetchNextPage, hasNextPage } = useAlarm();

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  if (alarmData.length === 0) return <CustomNoItem />;

  return (
    <AnimatePresence>
      {alarmData.map((datum) => (
        <CustomItem
          key={datum.id}
          boardId={datum.boardId}
          id={datum.id}
          age={datum.age}
          image={datum.image}
          nickname={datum.nickname}
          type={datum.msg}
          isAlive={datum.isAlive}
          createdAt={datum.createdAt}
        />
      ))}
      <div ref={setRefs} />
    </AnimatePresence>
  );
}
