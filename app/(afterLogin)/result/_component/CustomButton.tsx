'use client';

import Button from '@/app/components/button/Button';
import { useRouter } from 'next/navigation';

export default function CustomButton() {
  const router = useRouter();

  const onResult = () => {
    router.push('/home');
  };

  return (
    <Button size='long' text='후~하러갈래!' color='orange' onClick={onResult} />
  );
}
