'use client';

import DetailCard from '@/app/components/card/DetailCard';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';
import { useToday } from '@/app/(beforeLogin)/_state/useToday';
import { useFeedVote } from '@/app/(beforeLogin)/_state/useFeedVote';
import { useFeedScrap } from '@/app/(beforeLogin)/_state/useFeedScrap';
import { useEffect, useState } from 'react';
import { useUser } from '@/app/(beforeLogin)/_state/useUser';
import { useFeedDelete } from '@/app/components/template/feedOne/_state/useFeedDelete';

type Props = {
  id: number;
};

export default function CustomDetailItem({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });
  const { localData: todayData } = useToday();
  const { localData: userData } = useUser();

  const [isVote, setIsVote] = useState(feedData.isLike);

  const onTrackableVote = () => {
    setIsVote(!isVote);
  };

  const { onVote } = useFeedVote({ id: id, onTrackable: onTrackableVote });
  const { onScrap } = useFeedScrap({ id: id });
  const { onDelete } = useFeedDelete({ id: id });

  useEffect(() => {
    setIsVote(feedData.isLike);
  }, [feedData]);

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
        isVote: isVote,
        isEdit: feedData.userId === userData.userId,
      }}
      onVote={onVote}
      onScrap={onScrap}
      onDelete={onDelete}
    />
  );
}
