'use client';

import HomeOn from '@/app/icon/home/on.png';
import HomeOff from '@/app/icon/home/off.png';
import FeedOn from '@/app/icon/feed/on.png';
import FeedOff from '@/app/icon/feed/off.png';
import MyPageOn from '@/app/icon/mypage/on.png';
import MyPageOff from '@/app/icon/mypage/off.png';
import WritingOn from '@/app/icon/writing/on.png';
import WritingOff from '@/app/icon/writing/off.png';
import { useMemo } from 'react';
import BarTab from '@/app/components/tab/BarTab';
import { useRouter, usePathname } from 'next/navigation';
import { BarTabItemTypes } from '@/app/components/tab/BarTabItem';
import { StaticImageData } from 'next/image';

export default function CustomBarTab() {
  const router = useRouter();
  const pathname = usePathname();

  const data: (BarTabItemTypes & { target: string })[] = useMemo(
    () => [
      {
        text: '홈',
        icon: {
          on: HomeOn as StaticImageData,
          off: HomeOff as StaticImageData,
        },
        target: '/home',
      },
      {
        text: '피드',
        icon: {
          on: FeedOn as StaticImageData,
          off: FeedOff as StaticImageData,
        },
        target: '/feed',
      },
      {
        text: '마이페이지',
        icon: {
          on: MyPageOn as StaticImageData,
          off: MyPageOff as StaticImageData,
        },
        target: '/my',
      },
      {
        text: '글 작성',
        icon: {
          on: WritingOn as StaticImageData,
          off: WritingOff as StaticImageData,
        },
        target: '/writing',
      },
    ],
    [],
  );

  const defaultSelect = useMemo(() => {
    const find = data.find((datum) => pathname.startsWith(datum.target));

    if (!find) return '홈';

    return find.text;
  }, [pathname]);

  const onTrackableTab = (select: string) => {
    const find = data.find((datum) => datum.text === select);

    if (!find || pathname.startsWith(find.target)) return;

    router.push(find.target);
  };

  return (
    <BarTab
      data={data}
      defaultSelect={defaultSelect}
      onTrackable={onTrackableTab}
    />
  );
}
