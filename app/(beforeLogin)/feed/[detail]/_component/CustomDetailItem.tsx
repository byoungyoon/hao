'use client';

import { useFeedOne } from '@/app/(beforeLogin)/feed/[detail]/_state/useFeedone';
import DetailCard from '@/app/components/card/DetailCard';

type Props = {
  id: number;
};

export default function CustomDetailItem({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });

  return (
    <DetailCard
      user={{
        age: feedData.age,
        profill: feedData.image,
        nickname: feedData.nickname,
      }}
      data={{
        thumbnail: feedData.thumbnail,
        date: feedData.date,
        title: feedData.title,
        subTitle: feedData.subTitle,
        voteCount: feedData.like,
        commentCount: feedData.comment,
      }}
      option={{
        isQuestion: feedData.isQuestion,
        isScrap: feedData.isBookmark,
        isVote: feedData.isLike,
      }}
    />
  );
}
