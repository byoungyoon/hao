'use client';

import { useEffect, useState } from 'react';
import { Tree } from '@byoungyoon/by-asset';

import * as styles from './customTree.css';

export default function CustomTree() {
  const [option, setOption] = useState({
    reset: 0,
    level: 0,
  });

  const onClickReset = () => {
    setOption({ ...option, reset: option.reset + 1 });
  };

  useEffect(() => {
    setOption({ ...option, level: window.innerHeight / 250 - 1 });
  }, []);

  return (
    <>
      <div className={styles.reset} onClick={onClickReset}>
        초기화
      </div>
      <Tree
        target='tree'
        isResize={false}
        color='#ffffff'
        defaultDepth={12}
        defaultCount={3}
        {...option}
      />
    </>
  );
}
