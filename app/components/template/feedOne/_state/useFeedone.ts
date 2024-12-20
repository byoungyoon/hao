import { useQuery } from '@tanstack/react-query';
import { useMemo } from 'react';
import { getFeedOne } from '@/app/components/template/feedOne/_lib/getFeedOne';

type Props = {
  id: number;
};

export const useFeedOne = ({ id }: Props) => {
  const { data } = useQuery({
    queryKey: ['feed', id],
    queryFn: getFeedOne,
    staleTime: 0,
    gcTime: 0,
  });

  const localData = useMemo(() => {
    if (!data)
      return {
        id: 0,
        image: '',
        nickname: '',
        date: '',
        age: 0,
        title: '',
        subTitle: '',
        comment: 0,
        like: 0,
        type: '후시딘' as '후시딘' | '후추',
        thumbnail: [],
        userId: '',
        isLike: false,
        isBookmark: false,
        isQuestion: false,
        category: '',
      };

    return {
      id: data.id,
      image: data.img,
      nickname: data.nickname,
      date: data.createdAt,
      age: data.age,
      title: data.subject,
      subTitle: data.body,
      thumbnail: data.images,
      like: data.vote,
      comment: data.commentCnt,
      isLike: data.isVoted,
      isBookmark: data.isBookmark,
      type: data.type,
      isQuestion: data.isQuestion,
      userId: data.userId,
      category: data.category,
    };
  }, [data]);

  return { localData };
};
