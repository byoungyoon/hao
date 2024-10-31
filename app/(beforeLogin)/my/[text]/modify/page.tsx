import Body from '@/app/components/text/Body';
import cx from 'classnames';
import CustomAgeItemGroup from '@/app/(beforeLogin)/my/[text]/modify/_component/CustomAgeItemGroup';
import CustomInput from '@/app/(beforeLogin)/my/[text]/modify/_component/CustomInput';
import CustomButton from '@/app/(beforeLogin)/my/[text]/modify/_component/CustomButton';
import SuspensePoint from '@/app/(beforeLogin)/my/[text]/modify/_suspense/SuspensePoint';
import { Suspense } from 'react';
import SuspenseUserWrapper from '@/app/(beforeLogin)/my/[text]/modify/_suspense/SuspenseUserWrapper';

import * as styles from './page.css';

export default function MyModifyPage() {
  return (
    <section className={styles.section}>
      <SuspenseUserWrapper>
        <article className={styles.article}>
          <Body size='1'>연령대</Body>
          <div className={styles.ageGroup}>
            <CustomAgeItemGroup />
          </div>
        </article>
        <article className={cx(styles.article, styles.pointArticle)}>
          <Body size='1'>나를 설정해봐</Body>
          <Suspense>
            <SuspensePoint />
          </Suspense>
        </article>
        <article className={styles.nicknameArticle}>
          <CustomInput />
          <Body size='5' className={styles.nicknameAside}>
            2~8자로 입력해줘
          </Body>
        </article>
        <div className={styles.buttonLayer}>
          <CustomButton />
        </div>
      </SuspenseUserWrapper>
    </section>
  );
}
