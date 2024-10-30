import Body from '@/app/components/text/Body';
import cx from 'classnames';

import * as styles from './chipLayer.css';

type Props = {
  text: string;
  color: 'gray' | 'orange';

  onClick?: () => void;
};

export default function ChipLayer({ text, color, onClick }: Props) {
  return (
    <div
      role='button'
      tabIndex={0}
      className={cx(styles.layer, color)}
      onClick={onClick}
    >
      <Body size='4' className={cx(styles.layerText, color)}>
        {text}
      </Body>
    </div>
  );
}
