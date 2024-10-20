import Body from '@/app/components/text/Body';
import CustomAgeItemGroup from '@/app/(beforeLogin)/my/modify/_component/CustomAgeItemGroup';
import cx from 'classnames';
import CustomPointCardGroup from '@/app/(beforeLogin)/my/modify/_component/CustomPointCardGroup';
import SuspenseModifyForm from '@/app/(beforeLogin)/my/modify/_component/SuspenseModifyForm';
import CustomInput from '@/app/(beforeLogin)/my/modify/_component/CustomInput';
import CustomButton from '@/app/(beforeLogin)/my/modify/_component/CustomButton';

import * as styles from './page.css';

export default function MyModifyPage() {
  return (
    <section className={styles.section}>
      <SuspenseModifyForm>
        <article className={styles.article}>
          <Body size='1'>연령대</Body>
          <div className={styles.ageGroup}>
            <CustomAgeItemGroup />
          </div>
        </article>
        <article className={cx(styles.article, styles.pointArticle)}>
          <Body size='1'>나를 설정해봐</Body>
          <CustomPointCardGroup />
        </article>
        <article className={styles.nicknameArticle}>
          <CustomInput />
          <Body size='5' className={styles.nicknameAside}>
            2~5자로 입력해줘
          </Body>
        </article>
        <div className={styles.buttonLayer}>
          <CustomButton />
        </div>
      </SuspenseModifyForm>
    </section>
  );
}
