'use client';

import { useParams } from 'next/navigation';

export default function CustomText() {
  const params = useParams<{ text: string; category: string }>();

  if (params.category) return <>{decodeURIComponent(params.category)}</>;

  return <>{!params.text ? '마이페이지' : decodeURIComponent(params.text)}</>;
}
