'use client';

import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { useFeedComment } from '@/app/components/template/feedOne/_state/useFeedComment';

type Props = {
  id: number;
};

export default function CustomNext({ id }: Props) {
  const divRef = useRef<HTMLDivElement | null>(null);

  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const setRefs = (node: HTMLDivElement | null) => {
    ref(node!);
    divRef.current = node;
  };

  const { fetchNextPage, hasNextPage } = useFeedComment({ id: id });

  useEffect(() => {
    if (inView && hasNextPage) fetchNextPage();
  }, [inView, hasNextPage, fetchNextPage]);

  return <div ref={setRefs} />;
}
