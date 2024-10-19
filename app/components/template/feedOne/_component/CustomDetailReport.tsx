'use client';

import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import { useFeedOne } from '@/app/components/template/feedOne/_state/useFeedone';

type Props = {
  id: number;
};

export default function CustomDetailReport({ id }: Props) {
  const { localData: feedData } = useFeedOne({ id: id });

  //TODO type 로그인 후 해야함
  return <CustomReport mode={feedData.type} />;
}
