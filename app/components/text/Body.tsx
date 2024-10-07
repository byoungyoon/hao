import { DetailedHTMLProps, HTMLAttributes } from 'react';
import cx from 'classnames';
import * as styles from './body.css';

type Props = {
  size: '1' | '2' | '3' | '4' | '5' | '6' | '7';
};

export default function Body(
  props: DetailedHTMLProps<
    HTMLAttributes<HTMLHeadingElement>,
    HTMLHeadingElement
  > &
    Props,
) {
  const { size, children, className, ...rest } = props;

  return (
    <h4 className={cx(styles.body, `type${size}`, className)} {...rest}>
      {children}
    </h4>
  );
}
