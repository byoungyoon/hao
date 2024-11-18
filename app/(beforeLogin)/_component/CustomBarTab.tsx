'use client';

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
import HomeOnIcon from '@/app/components/svg/HomeOnIcon';
import HomeOffIcon from '@/app/components/svg/HomeOffIcon';
import FeedOnIcon from '@/app/components/svg/FeedOnIcon';
import FeedOffIcon from '@/app/components/svg/FeedOffIcon';
import MyPageOnIcon from '@/app/components/svg/MyPageOnIcon';
import MyPageOffIcon from '@/app/components/svg/MyPageOffIcon';
import WritingOnIcon from '@/app/components/svg/WritingOnIcon';
import WritingOffIcon from '@/app/components/svg/WritingOffIcon';

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
          on: (
            <HomeOnIcon
              color={vars.color.orange['100']}
              borderColor={vars.color.orange['300']}
            />
          ),
          off: <HomeOffIcon />,
        },
        target: '/home',
      },
      {
        text: '피드',
        icon: {
          on: (
            <FeedOnIcon
              color={vars.color.orange['100']}
              borderColor={vars.color.orange['300']}
            />
          ),
          off: <FeedOffIcon />,
        },
        target: '/feed',
      },
      {
        text: '글 작성',
        icon: {
          on: (
            <WritingOnIcon
              color={vars.color.orange['100']}
              borderColor={vars.color.orange['300']}
            />
          ),
          off: <WritingOffIcon />,
        },
        target: '/writing',
      },
      {
        text: '마이페이지',
        icon: {
          on: (
            <MyPageOnIcon
              color={vars.color.orange['100']}
              borderColor={vars.color.orange['300']}
            />
          ),
          off: <MyPageOffIcon />,
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
