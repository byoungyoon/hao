'use client';

import Body from '@/app/components/text/Body';
import { useMyScrapFeed } from '@/app/(beforeLogin)/my/[text]/scrap/[category]/_state/useMyScrapFeed';

type Props = {
  category: string;
};

export default function CustomText({ category }: Props) {
  const { localData } = useMyScrapFeed({ category: category });

  return <Body size='5'>총 {localData.length}건</Body>;
}
