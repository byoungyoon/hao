'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect } from 'react';
import dynamic from 'next/dynamic';

const AuthPage = () => {
  const searchParam = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const token = searchParam.get('token') ?? '';
    if (!!token) router.push(`/auth/${token}`);
    else {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (window as any).LogoutHandler.postMessage('');
    }
  }, [router, searchParam]);

  return null;
};

export default dynamic(() => Promise.resolve(AuthPage), {
  ssr: false,
});
