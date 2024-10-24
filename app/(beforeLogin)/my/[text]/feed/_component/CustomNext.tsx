'use client';

import { useEffect, useRef } from 'react';
import { useFeedForm } from '@/app/store/useTranslate';
import { useInView } from 'react-intersection-observer';
import { useMyFeed } from '@/app/(beforeLogin)/my/[text]/_state/useMyFeed';

export default function CustomNext() {
  const { category, isAdopted } = useFeedForm();
  const divRef = useRef<HTMLDivElement | null>(null);

  const { hasNextPage, fetchNextPage } = useMyFeed({
    category: category,
    isAdopted: isAdopted,
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
