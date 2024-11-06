'use client';

import Body from '@/app/components/text/Body';

import * as styles from '@/app/components/card/detailCard.css';

type Props = {
  subTitle: string;
};

export default function CustomSubTitle({ subTitle }: Props) {
  const linkText = (text: string) => {
    const urlPattern = /(https?:\/\/[^\s]+)/g;
    return text.replace(urlPattern, '<a href="$1" target="_blank">$1</a>');
  };

  return (
    <Body size='5' className={styles.subTitle}>
      <div dangerouslySetInnerHTML={{ __html: linkText(subTitle) }} />
    </Body>
  );
}
