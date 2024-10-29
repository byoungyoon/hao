'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { useCallback, useEffect } from 'react';
import Login from '@/app/image/sample/login.png';
import Kakao from '@/app/image/sample/kakao.png';
import Image from 'next/image';
import Body from '@/app/components/text/Body';
import Heading from '@/app/components/text/Heading';
import dynamic from 'next/dynamic';

import * as styles from './page.css';

const KEY = '5070eea30f03c9a37011ccb60fc2df72';
const REDIRECT = `${process.env.NEXT_PUBLIC_REDIRECT_URL}/web`;
const URL = `https://kauth.kakao.com/oauth/authorize?client_id=${KEY}&redirect_uri=${REDIRECT}&response_type=code`;

type LoginResponseTypes = {
  access_token: string;
};

function WebPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const onClick = () => {
    window.location.href = URL;
  };

  const onToken = useCallback(
    (code: string) => {
      const params = new URLSearchParams();
      params.append('grant_type', 'authorization_code');
      params.append('client_id', KEY);
      params.append('redirect_uri', REDIRECT);
      params.append('code', code);

      fetch('https://kauth.kakao.com/oauth/token', {
        method: 'POST',
        body: params,
        cache: 'no-store',
        headers: {
          'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      }).then((data) => {
        data.json().then((datum: LoginResponseTypes) => {
          router.push(`/auth/${datum.access_token}`);
        });
      });
    },
    [router],
  );

  useEffect(() => {
    const code = searchParams.get('code');
    if (!code) return;

    onToken(code);
  }, [searchParams, onToken]);

  return (
    <section className={styles.section}>
      <article className={styles.textArticle}>
        <Body size='3'>
          사람은 일주일에 <strong>45분</strong>을 후회한다고 해
        </Body>
        <Heading size='1' className={styles.subTitle}>
          <strong>후~해</strong>가 그 시간도
        </Heading>
        <Heading size='1'>소중하게 만들어줄게!</Heading>
      </article>
      <div className={styles.loginImageLayer}>
        <Image src={Login} alt='login' />
      </div>

      <button type='button' onClick={onClick} className={styles.button}>
        <Image src={Kakao} alt='kakao' />
        <Body size='3'>카카오로 3초만에 시작하기</Body>
      </button>
    </section>
  );
}

export default dynamic(() => Promise.resolve(WebPage), {
  ssr: false,
});
