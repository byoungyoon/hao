'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type Props = {
  children: ReactNode | ReactNode[];
  callback: string;
  className: string;
};

export default function CustomCallback({
  children,
  callback,
  className,
}: Props) {
  const router = useRouter();

  const onClick = () => {
    router.push(callback);
  };

  return (
    <div role='button' tabIndex={0} onClick={onClick} className={className}>
      {children}
    </div>
  );
}
