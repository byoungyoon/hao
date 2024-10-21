'use client';

import DetailCard from '@/app/components/card/DetailCard';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';
import { useFeedVote } from '@/app/components/template/feedOne/_state/useFeedVote';
import { useFeedScrap } from '@/app/components/template/feedOne/_state/useFeedScrap';

type Props = {
  id: number;
};

export default function CustomDetailItem({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });
  const { localData: todayData } = useToday();
  const { onVote } = useFeedVote({ id: id });
  const { onScrap } = useFeedScrap({ id: id });

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
        question: todayData.body,
        questionCategory: todayData.category,
      }}
      option={{
        isQuestion: feedData.isQuestion,
        isScrap: feedData.isBookmark,
        isVote: feedData.isLike,
      }}
      onVote={onVote}
      onScrap={onScrap}
    />
  );
}
