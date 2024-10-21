import Body from '@/app/components/text/Body';
import CustomOption from '@/app/(beforeLogin)/writing/_component/CustomOption';
import Button from '@/app/components/button/Button';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';
import CustomImage from '@/app/(beforeLogin)/writing/_component/CustomImage';
import CustomCategory from '@/app/(beforeLogin)/writing/_component/CustomCategory';
import CustomInput from '@/app/(beforeLogin)/writing/_component/CustomInput';
import CustomTextarea from '@/app/(beforeLogin)/writing/_component/CustomTextarea';

import * as styles from './page.css';

export default function WritingPage() {
  return (
    <section className={styles.section}>
      <article className={styles.writingArticle}>
        <CustomCategory />
        <CustomInput />
        <CustomTextarea />
        <CustomReport />
        <div className={styles.imageGroupLayer}>
          <CustomImage />
        </div>
      </article>
      <article className={styles.optionArticle}>
        <Body size='1'>내가 원하는 답변은</Body>
        <div className={styles.optionLayerGroup}>
          <CustomOption mode='후시딘' />
          <CustomOption mode='후추' isSelect />
        </div>
        <Button size='long' text='공유할래!' color='gray' />
      </article>
    </section>
  );
}
