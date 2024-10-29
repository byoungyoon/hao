import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import * as styles from './buttonText.css';

type Props = {
  size: '1' | '2' | '3';
};

export default function ButtonText(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > &
    Props,
) {
  const { size, children, className, ...rest } = props;

  return (
    <h4 className={cx(styles.type[size], className)} {...rest}>
      {children}
    </h4>
  );
}
