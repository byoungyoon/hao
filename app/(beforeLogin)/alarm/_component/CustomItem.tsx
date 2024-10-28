import Image from 'next/image';
import cx from 'classnames';
import Body from '@/app/components/text/Body';
import { useMemo } from 'react';

import * as styles from './customItem.css';

type Props = {
  age: number;
  image: string;
  nickname: string;
  type: 'LIKE' | 'COMMENT' | 'ADOPTED';
  message?: string;
};

export default function CustomItem({
  age,
  image,
  nickname,
  type,
  message,
}: Props) {
  const title = useMemo(() => {
    if (type === 'LIKE') return '이 너의 글을 좋아해!';
    if (type === 'COMMENT') return '가 너의 글에 댓글을 남겼어!';
    if (type === 'ADOPTED') return '가 너의 답변이 힘이 됐대!';

    return '';
  }, [type]);

  return (
    <div className={styles.item}>
      <div className={cx(styles.imageLayer, `age${age}`)}>
        <Image
          src={`data:image/png;base64,${image}`}
          alt='alarm'
          width={38}
          height={38}
          unoptimized
        />
      </div>
      <div className={styles.textLayer}>
        <Body size='3'>
          &apos;<strong>{nickname}</strong>&apos; {title}
        </Body>
        {message && <Body size='5'>{message}</Body>}
      </div>
    </div>
  );
}
