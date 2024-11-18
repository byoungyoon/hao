import Body from '@/app/components/text/Body';
import CloseIcon from '@/app/components/svg/CloseIcon';
import { vars } from '@/app/theme.css';
import ToastIcon from '@/app/components/svg/ToastIcon';

import * as styles from './toast.css';

type Props = {
  text: string;
  onClose?: () => void;
};

export default function Toast({ text, onClose }: Props) {
  return (
    <div className={styles.toast}>
      <div className={styles.textLayer}>
        <ToastIcon
          color={vars.color.orange['300']}
          borderColor={vars.color.orange['100']}
        />
        <Body size='5' className={styles.text}>
          {text}
        </Body>
      </div>
      <span onClick={onClose}>
        <CloseIcon color={vars.color.orange['300']} />
      </span>
    </div>
  );
}
