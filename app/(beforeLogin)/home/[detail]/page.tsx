import FeedOne from '@/app/components/template/feedOne/FeedOne';

type Props = {
  params: { detail: string };
};

export default function HomeDetailPage({ params }: Props) {
  return <FeedOne id={Number(params.detail)} />;
}
