import CustomTab from '@/app/(beforeLogin)/feed/_component/CustomTab';
import CustomChipGroup from '@/app/(beforeLogin)/feed/_component/CustomChipGroup';
import CustomItem from '@/app/(beforeLogin)/feed/_component/CustomItem';
import Sample from '@/app/image/sample/sample2.png';
import CSample from '@/app/image/sample/cSample.png';

import { StaticImageData } from 'next/image';
import * as styles from './page.css';

export default function FeedPage() {
  const chipData = [
    '전체',
    '진로',
    '연애',
    '자기개발',
    '건강',
    '대인관계',
    '경제',
    '시간',
    '기타',
  ];

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
    <section className={styles.section}>
      <CustomTab />
      <article className={styles.listArticle}>
        <CustomChipGroup data={chipData} defaultSelect='전체' />
        <div className={styles.itemGroup}>
          <CustomItem {...sample} age={20} callback='a' />
          <CustomItem {...sample} isaAdopt callback='b' />
          <CustomItem {...sample} isLike callback='c' />
          <CustomItem {...sample} isBookmark callback='d' />
          <CustomItem {...sample} callback='e' />
        </div>
      </article>
    </section>
  );
}
