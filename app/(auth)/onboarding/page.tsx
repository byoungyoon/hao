'use client';

import Heading from '@/app/components/text/Heading';
import Logo from '@/app/icon/logo.svg';
import Onboarding from '@/app/image/sample/onboarding.svg';
import Image from 'next/image';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import * as styles from './page.css';

export default function OnboardingPage() {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace('/web');
    }, 2500);
  }, []);

  return (
    <section className={styles.container}>
      <div className={styles.titleLayer}>
        <Heading size='2' className={styles.subTitle}>
          후회를 날리는 습관
        </Heading>
        <Image src={Logo} alt='logo' />
      </div>
      <Image src={Onboarding} alt='onboarding' />
    </section>
  );
}
