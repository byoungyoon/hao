'use client';

import { useMyScrapFeed } from '@/app/(beforeLogin)/my/scrap/[category]/_state/useMyScrapFeed';
import Card from '@/app/components/card/Card';
import { usePathname, useRouter } from 'next/navigation';

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
