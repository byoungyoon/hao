'use client';

import { useMyScrapFeed } from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_state/useMyScrapFeed';
import Card from '@/app/components/card/Card';
import { usePathname, useRouter } from 'next/navigation';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';

import * as styles from './customCardGroup.css';

type Props = {
  category: string;
};

export default function CustomCardGroup({ category }: Props) {
  const router = useRouter();
  const pathname = usePathname();

  const onClickCard = (detail: number) => () => {
    router.push(`${pathname}/${detail}`);
  };

  const { localData } = useMyScrapFeed({ category: category });
  const { localData: todayData } = useToday();

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
            id: datum.id,
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
