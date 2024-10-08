import CSample from '@/app/image/sample/cSample.png';
import { StaticImageData } from 'next/image';
import Sample from '@/app/image/sample/sample2.png';
import CustomItem from '@/app/(beforeLogin)/feed/_component/CustomItem';

type Props = {
  params: { detail: string };
};

export default function FeedDetailPage({ params }: Props) {
  console.log(params);

  const sample = {
    image: CSample as StaticImageData,
    nickname: '급식도둑',
    date: '2024.09.28',
    age: 10,
    thumbnail: Sample as StaticImageData,
    title: '가창시험 C 이거 맞냐...',
    subTitle:
      '나 원래 평소에 애들 앞에서 하니까 떨려서 염소창법으로 불러버림 ㅠ 하...',
    like: 45,
    comment: 3,
  };

  return (
    <section>
      <CustomItem hasAdopt={false} height={221} {...sample} />
    </section>
  );
}
