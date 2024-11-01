import Heading from '@/app/components/text/Heading';
import cx from 'classnames';
import Arrow from '@/app/icon/arrow-white.svg';
import Image from 'next/image';
import Body from '@/app/components/text/Body';

import * as styles from './customChartItem.css';

type Props = {
  rank: number;
  count: number;
  text: string;

  onClick?: () => void;
};

export default function CustomChartItem({ rank, count, text, onClick }: Props) {
  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
      <Heading size='2' className={cx(styles.text, `rank${rank}`)}>
        {count}건
      </Heading>
      <div className={cx(styles.block, `rank${rank}`)}>
        <Heading size='2' className={styles.blockRank}>
          {rank}위
        </Heading>
        <div className={styles.blockGroup}>
          <Body size='3' className={styles.blockGroupText}>
            {text}
          </Body>
          <Image src={Arrow} alt='arrow' width={20} height={20} />
        </div>
      </div>
    </div>
  );
}
