'use client';

import { useFeedForm } from '@/app/store/useTranslate';
import Card from '@/app/components/card/Card';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';
import { usePathname, useRouter } from 'next/navigation';
import { useMyFeed } from '@/app/(beforeLogin)/my/[text]/_state/useMyFeed';

import * as styles from './customCardGroup.css';

export default function CustomCardGroup() {
  const router = useRouter();
  const pathname = usePathname();
  const { category, isAdopted } = useFeedForm();

  const { localData } = useMyFeed({ category: category, isAdopted: isAdopted });
  const { localData: todayData } = useToday();

  const onClickCard = (detail: number) => () => {
    router.push(`${pathname}/${detail}`);
  };

  return (
    <div className={styles.group}>
      {localData.map((datum) => (
        <Card
          key={datum.id}
          user={{
            age: datum.age,
            nickname: datum.nickname,
            profill: datum.img,
          }}
          data={{
            date: datum.createdAt,
            title: datum.subject,
            subTitle: datum.body,
            thumbnail: datum.thumbnail,
            voteCount: datum.vote,
            commentCount: datum.commentCnt,
            questionCategory: todayData.category,
            question: todayData.body,
          }}
          option={{
            isScrap: datum.isBookmark,
            isVote: datum.isVoted,
            isAdopt: datum.isVoted,
          }}
          onClick={onClickCard(datum.id)}
        />
      ))}
    </div>
  );
}
