'use client';

import { useParams } from 'next/navigation';
import BackButton from '@/app/(beforeLogin)/_component/BackButton';

export default function CustomBackButton() {
  const params = useParams<{ text: string }>();

  return params.text && <BackButton />;
}
