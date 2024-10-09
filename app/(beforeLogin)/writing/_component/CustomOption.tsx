'use client';

import Body from '@/app/components/text/Body';
import cx from 'classnames';

import * as styles from './customOption.css';

type Props = {
  mode: '후시딘' | '후추';

  isSelect?: boolean;
  onClick?: () => void;
};

export default function CustomOption({ mode, isSelect, onClick }: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.optionLayer, isSelect && 'orange')}
      onClick={onClick}
    >
      <Body size='4' className={cx(styles.optionTitle, isSelect && 'orange')}>
        {mode}
      </Body>
      <Body
        size='5'
        className={cx(styles.optionSubTitle, isSelect && 'orange')}
      >
        {mode === '후시딘' ? '긍정적인 조언으로 후~' : '진지한 조언으로 후~'}
      </Body>
    </div>
  );
}
