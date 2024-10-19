import Body from '@/app/components/text/Body';
import CustomOption from '@/app/(beforeLogin)/writing/_component/CustomOption';
import Button from '@/app/components/button/Button';
import Arrow from '@/app/icon/category-gray.png';
import Vector from '@/app/icon/vector.png';
import Camera from '@/app/icon/camera-gray.png';
import Image from 'next/image';
import CustomReport from '@/app/(beforeLogin)/_component/CustomReport';

import * as styles from './page.css';

export default function WritingPage() {
  return (
    <section className={styles.section}>
      <article className={styles.writingArticle}>
        <div className={styles.category}>
          <Body size='3' className={styles.categoryText}>
            진로
          </Body>
          <Image src={Arrow.src} alt='arrow' width={24} height={24} />
        </div>
        <div className={styles.inputLayer}>
          <input
            type='text'
            className={styles.input}
            placeholder='제목을 지어줘!(3자~15자)'
          />
          <Image
            src={Vector.src}
            alt='vector'
            className={styles.inputReset}
            width={16}
            height={17}
          />
        </div>
        <div className={styles.textareaLayer}>
          <textarea
            className={styles.textarea}
            placeholder='무슨 후회야? 궁금하다!'
          />
          <Body size='3' className={styles.counting}>
            0/100
          </Body>
        </div>
        <CustomReport />
        <div className={styles.imageGroupLayer}>
          <div className={styles.imageLayer}>
            <Image src={Camera.src} alt='camera' width={24} height={24} />
          </div>
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
