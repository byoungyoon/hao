'use client';

import { useParams } from 'next/navigation';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';

export default function CustomBackButton() {
  const params = useParams<{ detail: string }>();

  return params.detail && <BackButton />;
}
