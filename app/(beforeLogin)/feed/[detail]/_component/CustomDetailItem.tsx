'use client';

import { useFeedOne } from '@/app/(beforeLogin)/feed/[detail]/_state/useFeedone';
import CustomItem from '@/app/(beforeLogin)/feed/_component/CustomItem';

type Props = {
  id: number;
};

export default function CustomDetailItem({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });

  return <CustomItem height={221} hasAdopt={false} {...feedData} />;
}
