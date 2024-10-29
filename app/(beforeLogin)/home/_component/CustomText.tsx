'use client';

import { useParams } from 'next/navigation';

export default function CustomText() {
  const params = useParams<{ detail: string }>();

  if (params.detail) return <>글 상세</>;

  return <></>;
}
