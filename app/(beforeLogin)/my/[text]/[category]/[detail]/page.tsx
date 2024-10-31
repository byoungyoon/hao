import FeedOne from '@/app/components/template/feedOne/FeedOne';

type Props = {
  params: { detail: string };
};

export default function MyCategoryDetailPage({ params }: Props) {
  return <FeedOne id={+params.detail} />;
}
