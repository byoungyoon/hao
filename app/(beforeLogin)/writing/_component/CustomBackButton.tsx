'use client';

import BackButton from '@/app/(beforeLogin)/_component/BackButton';
import { useParams } from 'next/navigation';

export default function CustomBackButton() {
  const params = useParams<{ left: string }>();

  return params.left && <BackButton />;
}
