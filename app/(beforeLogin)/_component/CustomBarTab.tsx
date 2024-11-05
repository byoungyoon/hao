'use client';

import HomeOn from '@/app/icon/home/on.svg';
import HomeOff from '@/app/icon/home/off.svg';
import FeedOn from '@/app/icon/feed/on.svg';
import FeedOff from '@/app/icon/feed/off.svg';
import MyPageOn from '@/app/icon/mypage/on.svg';
import MyPageOff from '@/app/icon/mypage/off.svg';
import WritingOn from '@/app/icon/writing/on.svg';
import WritingOff from '@/app/icon/writing/off.svg';
import { useMemo } from 'react';
import BarTab from '@/app/components/tab/BarTab';
import { usePathname, useRouter } from 'next/navigation';
import { BarTabItemTypes } from '@/app/components/tab/BarTabItem';
import { useWritingForm } from '@/app/store/useTranslate';
import { useModal } from '@/app/store/useModal';
import TextModal from '@/app/components/modal/TextModal';
import Image from '@/app/image/character/modal-intercept.svg';
import { vars } from '@/app/theme.css';
import cx from 'classnames';

import * as styles from './customBarTab.css';

export default function CustomBarTab() {
  const router = useRouter();
  const pathname = usePathname();

  const check = useWritingForm((state) => state.check);
  const { openModal, closeModal } = useModal();

  const isView = useMemo(
    () => /\/\d+$/.test(pathname || '') || /\/alarm$/.test(pathname || ''),
    [pathname],
  );

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
            text: '응 되돌아갈래!',
            onResult: onAction(find.target),
          }}
        />,
      );
    }
  };

  return (
    <footer className={cx(styles.footer, isView && 'hidden')}>
      <BarTab data={data} onTrackable={onTrackableTab} />
    </footer>
  );
}
