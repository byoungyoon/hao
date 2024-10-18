'use client';

import { useInView } from 'react-intersection-observer';
import { useEffect, useRef } from 'react';
import { useFeed } from '@/app/(beforeLogin)/feed/_state/useFeed';
import { useFeedForm } from '@/app/store/useTranslate';

export default function CustomNext() {
  const { age, category, sort } = useFeedForm();
  const divRef = useRef<HTMLDivElement | null>(null);

  const { hasNextPage, fetchNextPage } = useFeed({
    age: age,
    category: category,
    sort: sort,
  });

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement | null) => {
    ref(node!);
    divRef.current = node;
  };

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return <div ref={setRefs} />;
}
