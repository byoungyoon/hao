import Body from '@/app/components/text/Body';
import cx from 'classnames';

import * as styles from './infolayer.css';

type Props = {
  text: string;
  color: 'gray' | 'orange';
};

export default function InfoLayer({ text, color }: Props) {
  return (
    <div className={cx(styles.layer, color)}>
      <Body size='5' className={cx(styles.layerText, color)}>
        {text}
      </Body>
    </div>
  );
}
