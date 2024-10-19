import { useMemo } from 'react';
import FeedOne from '@/app/components/template/feedOne/FeedOne';

type Props = {
  params: { detail: string };
};

export default function MyScrapCategoryDetailPage({ params }: Props) {
  const id = useMemo(() => +params.detail, [params.detail]);

  return <FeedOne id={id} />;
}
