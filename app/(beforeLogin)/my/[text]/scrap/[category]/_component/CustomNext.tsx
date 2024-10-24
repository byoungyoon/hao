'use client';

import { useEffect, useRef } from 'react';
import { useMyScrapFeed } from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_state/useMyScrapFeed';
import { useInView } from 'react-intersection-observer';

type Props = {
  category: string;
};

export default function CustomNext({ category }: Props) {
  const divRef = useRef<HTMLDivElement | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement | null) => {
    ref(node!);
    divRef.current = node;
  };

  const { hasNextPage, fetchNextPage } = useMyScrapFeed({ category: category });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return <div ref={setRefs} />;
}
