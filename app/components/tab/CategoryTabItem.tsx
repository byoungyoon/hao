import Body from '@/app/components/text/Body';
import * as styles from './categoryTabItem.css';
import cx from 'classnames';

export type CategoryTabItemTypes = {
  text: string;
  isSelect?: boolean;
};

type Props = CategoryTabItemTypes & { onClick?: () => void };

export default function CategoryTabItem({ text, isSelect, onClick }: Props) {
  return (
    <div role='button' tabIndex={0} className={styles.item} onClick={onClick}>
      <Body size='4' className={cx(styles.text, isSelect && 'select')}>
        {text}
      </Body>
      <div className={cx(styles.border, isSelect && 'select')} />
    </div>
  );
}
