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
import { useRouter } from 'next/navigation';
import { BarTabItemTypes } from '@/app/components/tab/BarTabItem';

export default function CustomBarTab() {
  const router = useRouter();

  const data: BarTabItemTypes[] = useMemo(
    () => [
      {
        text: '홈',
        icon: {
          on: HomeOn.src,
          off: HomeOff.src,
        },
        target: '/home',
      },
      {
        text: '피드',
        icon: {
          on: FeedOn.src,
          off: FeedOff.src,
        },
        target: '/feed',
      },
      {
        text: '글 작성',
        icon: {
          on: WritingOn.src,
          off: WritingOff.src,
        },
        target: '/writing',
      },
      {
        text: '마이페이지',
        icon: {
          on: MyPageOn.src,
          off: MyPageOff.src,
        },
        target: '/my',
      },
    ],
    [],
  );

  const onTrackableTab = (select: string) => {
    const find = data.find((datum) => datum.text === select);
    if (!find) return;

    router.push(find.target);
  };

  return <BarTab data={data} onTrackable={onTrackableTab} />;
}
