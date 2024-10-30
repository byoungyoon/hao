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
import { useWritingForm } from '@/app/store/useTranslate';
import { useModal } from '@/app/store/useModal';
import TextModal from '@/app/components/modal/TextModal';
import Image from '@/app/image/character/modal-intercept.svg';
import { vars } from '@/app/theme.css';

export default function CustomBarTab() {
  const router = useRouter();
  const check = useWritingForm((state) => state.check);
  const { openModal, closeModal } = useModal();

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

  const onAction = (target: string) => () => {
    closeModal();

    router.push(target);
  };

  const onTrackableTab = (select: string) => {
    const find = data.find((datum) => datum.text === select);
    if (!find) return;

    if (check()) {
      router.push(find.target);
    } else {
      openModal(
        <TextModal
          text={['이 내용은 다 사라질 거야.', '되돌아갈래?']}
          image={{
            item: Image.src,
            background: vars.color.blue['100'],
          }}
          result={{
            text: '응 되돌릴래!',
            onResult: onAction(find.target),
          }}
        />,
      );
    }
  };

  return <BarTab data={data} onTrackable={onTrackableTab} />;
}
