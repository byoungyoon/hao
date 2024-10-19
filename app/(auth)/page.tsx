'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const AuthPage = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  const token = searchParam.get('token') ?? '';

  useEffect(() => {
    if (token) router.push(`/auth/${token}`);
  }, [token]);

  return null;
};

export default dynamic(() => Promise.resolve(AuthPage), {
  ssr: false,
});
