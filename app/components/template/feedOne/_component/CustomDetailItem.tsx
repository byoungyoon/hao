'use client';

import DetailCard from '@/app/components/card/DetailCard';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';

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
