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
    else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).LogoutHandler.postMessage('');
    }
  }, [token, router]);

  return null;
};

export default dynamic(() => Promise.resolve(AuthPage), {
  ssr: false,
});
